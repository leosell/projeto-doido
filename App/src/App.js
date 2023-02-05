// import React, { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"

// import { Context } from "./source/status"

// import Users from "./pages/Users/index"
// import Empresas from "./pages/Empresas/index"

const App = () => {

    // const { state } = useContext(Context)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> } />
                {/* { state.isLogged ? (
                    <>
                        <Route path="/" element={ Users } />
                        <Route path="/empresas" element={ Empresas } />
                    </>
                ) : (
                    <Route path="/Login" element={ Login } />
                ) } */}
            </Routes>
        </BrowserRouter>
        // <div>
        //     <h1>Hello world</h1>
        // </div>
    )
}

export default App