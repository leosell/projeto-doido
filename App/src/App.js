/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"

// import { Context, inicialState } from "./source/status"

import Users from "./pages/Users/index"
import Empresas from "./pages/Empresas/index"

import { Provider } from "./source/status"

const App = () => {

    // const { state = inicialState } = useContext(Context)

    return (
        <BrowserRouter>
            <Routes>
                {/* { state.isLogged ? (
                    <>
                        <Route 
                            path="/"
                            element={ <Users /> }
                            loader={async ({ params }) => {
                                return fetch(
                                    `/user/busca`
                                )
                            }}
                        />
                        <Route path="/empresas" element={ <Empresas /> } />
                    </>
                ) : (
                    <Route path="/login" element={ <Login /> } />
                ) } */}
                <Route path="/" element={ <Login /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/empresas" element={ <Empresas /> } />
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