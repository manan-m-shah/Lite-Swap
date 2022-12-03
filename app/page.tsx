'use client'
import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import { ActionKind } from '../types/Context'
import Uik from "@reef-defi/ui-kit";
import { addLiquidity } from '../utils/reef'

const options = [
    { value: 'swap', text: 'Swap' },
    { value: 'pool', text: 'Pool' },
]

const firstToken = {
    name: 'Reef',
    symbol: "REEF",
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png',
    price: 0.05,
    available: 10000
}

const calcProvide = ({
    firstToken,
    secondToken,
    percentage
}: {
    firstToken?: number,
    secondToken?: number,
    percentage?: number
}): { firstToken: number, secondToken: number, percentage: number, value: number } => {
    return {
        firstToken: 0,
        secondToken: 0,
        percentage: 0,
        value: 0
    }
}

const calcWithdraw = ({
    percentage
}: {
    percentage: number
}): { firstToken: number, secondToken: number, value: number } => {
    return {
        firstToken: 100 * percentage,
        secondToken: 100 * percentage,
        value: 200 * percentage,
    }
}

// @ts-ignore
const onProvide = e => console.log("Provide", e)
// @ts-ignore
const onWithdraw = e => {
    console.log(Date.now().toString())
    console.log("Withdraw", e)
}

const Home: NextPage = () => {
    const { state, dispatch } = useContext(AppContext)
    const [activeTab, setActiveTab] = useState('swap')
    const [activeToken, setActiveToken] = useState(0)

    const secondToken = {
        name: state.tokens[activeToken].name,
        symbol: state.tokens[activeToken].symbol,
        image: state.tokens[activeToken].logoURI,
        price: 0.05,
        available: 1000000,
    }

    const data = {
        firstToken: firstToken,
        secondToken: secondToken,
    }

    // @ts-ignore
    const onTrade = e => {
        addLiquidity(
            state,
            dispatch,
            '0xBBEebBA1030AF64448D5568C6a5e5fea2b60B3EF',
            '0xCD47f069DC906e07d8d1cdBCCDc89e8D4241b441',
            1000,
            3000,
            0,
            0,
            '0x185c76e98b57f005500e52b9b4626f8395aa37ed',
            Date.now() + 31536000000,
        )
        console.log("Trade", e)
    }

    console.log(state)
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <div className=''>
                <Uik.PoolActions
                    data={data}
                    calcProvide={calcProvide}
                    calcWithdraw={calcWithdraw}
                    onProvide={onProvide}
                    onWithdraw={onWithdraw}
                    onTrade={onTrade}
                    onTradeInput={e => console.log(e)}
                />
            </div>
        </div>
    )
}

export default Home
