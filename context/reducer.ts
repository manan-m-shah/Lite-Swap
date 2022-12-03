import { Action, ActionKind, State } from "../types/Context"

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionKind.SET_ACCOUNTS:
            console.log("Setting account to: ", action.payload)
            return {
                ...state,
                accounts: action.payload,
            }
        case ActionKind.SET_SIGNER:
            console.log("Setting signer to: ", action.payload)
            return {
                ...state,
                signer: action.payload,
            }
        case ActionKind.SET_ACTIVE_ACCOUNT:
            console.log("Setting active account to: ", action.payload)
            return {
                ...state,
                activeAccount: action.payload,
            }
        default:
            return state
    }
}

export default reducer