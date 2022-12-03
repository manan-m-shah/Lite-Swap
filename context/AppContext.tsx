import { createContext } from "react"
import { Action, State } from "../types/Context"


const AppContext = createContext({} as {state: State, dispatch: React.Dispatch<Action>})

export default AppContext