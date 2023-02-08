/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import { Context, Provider } from "./source/status"
import Users from "./pages/Users/index"
import Empresas from "./pages/Empresas/index"

const App = () => {

    const { state } = useContext(Context)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> } />
                { state.isLogged ? (
                    <>
                        <Route path="/users" element={ <Users /> } />
                        <Route path="/empresas" element={ <Empresas /> } />
                    </>
                ) : (null)}
                {/* <Route path="/" element={ <Login /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/empresas" element={ <Empresas /> } /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default () => {
    return (
        <Provider>
          <App />
        </Provider>
    );
  };