import { Signer } from "@reef-defi/evm-provider"
import {InjectedAccountWithMeta} from "@polkadot/extension-inject/types"

type InjectedAccount = InjectedAccountWithMeta & {
    name: InjectedAccountWithMeta["meta"]["name"],
    address: InjectedAccountWithMeta["address"]
}

type Token = {
    address: string,
    name: string,
    symbol: string,
    decimals: number,
    balance: string,
    logoURI: string
}

type State = {
    accounts: InjectedAccount[] | null,
    signer: Signer | null,
    activeAccount: InjectedAccount | null,
    tokens: Token[]
}

export enum ActionKind {
    SET_ACCOUNTS = "SET_ACCOUNT",
    SET_SIGNER = "SET_SIGNER",
    SET_ACTIVE_ACCOUNT = "SET_ACTIVE_ACCOUNT",
}

type Action = {
    type: ActionKind
    payload: any
}

export type { State, Action }
