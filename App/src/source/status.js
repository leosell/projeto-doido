import React, { useReducer } from "react"

export const inicialState = {
    isLogged: false,
    loading: false
}

const status = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, loading: action.payload, isLogged: action.payload }

        case "logOut":
            localStorage.removeItem('token')
            return { ...state, isLogged: false }

        default:
            return state
    }
}

export const Context = React.createContext(inicialState)

export const Provider = ({ children }) => {
    const [ state, dispatch ] = useReducer(status, inicialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}