import React, { useContext } from "react";
import { Context } from "./status";
import API from "../API";

const validateToken = () => {
    
   const { state, dispatch } = useContext(Context)

    setTimeout(() => {
        const validateToken = async () => {
            const token = await localStorage.getItem('token')
            if (token) {
                try {
                    const data = await API.get('/user', { headers: { token: token } })
                    await dispatch({ type: 'verify', payload: data.data.data })
                } catch (err) {
                    console.log(err)
                    dispatch({ type: 'login', payload: false })
                }
            } else {
                dispatch({ type: 'login', payload: false })
            }
        }
        validateToken()
    }, 500)

    return (
        <div>
            <h1>Carregando...</h1>
        </div>
    )
}

export default validateToken