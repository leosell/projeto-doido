import React, { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"

import { Context, inicialState } from "./source/status"

import Users from "./pages/Users/index"
import Empresas from "./pages/Empresas/index"

const App = () => {

    const { state = inicialState } = useContext(Context)

    return (
        <BrowserRouter>
            <Routes>
                { state.isLogged ? (
                    <>
                        <Route 
                            path="/"
                            element={ <Users /> }
                            // loader={async ({ params }) => {
                            //     return fetch(
                            //         `/user/busca`
                            //     )
                            // }}
                        />
                        <Route path="/empresas" element={ <Empresas /> } />
                    </>
                ) : (
                    <Route path="/login" element={ <Login /> } />
                ) }
            </Routes>
        </BrowserRouter>
    )
}

export default App