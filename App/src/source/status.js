import React, { useReducer } from "react"

const inicialState = {
    Loading: true,
    isLogged: false,
    update: false
}

export const status = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, isLogged: action.payload, Loading: false }

        case "logOut":
            localStorage.removeItem('token')
            return { ...state, isLogged: false, Loading: false }

        case "verify":
            return { ...state, isLogged: true, Loading: false }

        case "update":
            return { ...state, update: action.payload }

        default:
            return state
    }
}

export const Context = React.createContext()

export const Provider = ({ children }) => {
    const [ state, dispatch ] = useReducer(status, inicialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}