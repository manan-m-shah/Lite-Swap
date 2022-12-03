// create app context and provider
import React, { createContext, useReducer, useState } from 'react'
import { Action, State } from '../types/Context'
import AppContext from './AppContext'
import initialState from './initialState'
import reducer from './reducer'

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch } as { state: State, dispatch: React.Dispatch<Action> }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
