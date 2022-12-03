import Uik from '@reef-defi/ui-kit'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import { ActionKind } from '../types/Context'
import { checkExtension } from '../utils/reef'


const Navbar = () => {
    const { state, dispatch } = useContext(AppContext)

    const [isAccountSelectorOpen, setIsAccountSelectorOpen] = useState(false)
    const [balance, setBalance] = useState(0)

    const connectWallet = async () => {
        const checkExtensionSuccess = await checkExtension(state, dispatch)
        console.log(checkExtensionSuccess)
    }

    useEffect(() => {
        const getBalance = async () => {
            if (!state.signer) {
                return
            }
            const balance = await state.signer.getBalance()
            setBalance(balance.toNumber())
        }
        getBalance()
    }, [])


    return (
        <div className='grid grid-cols-3 w-full fixed top-0'>
            <Uik.AccountSelector
                isOpen={isAccountSelectorOpen}
                onClose={() => setIsAccountSelectorOpen(false)}
                // @ts-ignore
                accounts={state.accounts}
                selectedAccount={state.activeAccount}
                onSelect={(account) => {
                    console.log(account)
                    dispatch({
                        type: ActionKind.SET_ACTIVE_ACCOUNT,
                        payload: account,
                    })
                    setIsAccountSelectorOpen(false)
                }}
            />
            <Uik.Container>
                <Uik.Text text='LiteSwap' type='headline' className='text-2xl font-bold' />
            </Uik.Container>
            <Uik.Container>
                {state.activeAccount ?
                    <Uik.Container

                    >
                        <Uik.ReefAmount
                            value={balance.toString()}
                        />

                        <Uik.Button
                            text={state.activeAccount.name}
                            onClick={() => setIsAccountSelectorOpen(!isAccountSelectorOpen)}
                            fill
                            rounded
                        />
                    </Uik.Container>
                    :
                    <Uik.Button
                        text='Connect Wallet'
                        onClick={connectWallet}
                    />
                }
            </Uik.Container>
        </div>
    )
}

export default Navbar