import React, { useContext, useState } from "react"
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import API from "../../API/index"
import { Context } from "../../source/status"

const Login = () => {

    const [ user, setUser ] = useState()
    const [ password, setPassword ] = useState()

    const { dispatch } = useContext(Context)
    const navigate = useNavigate()

    const loginPressed = async () => {
        try {
            const data = await API.post('/login', { 
                user: user,
                password: password 
            })
            setTimeout(() => {
                if (data.status === 200) {
                    localStorage.setItem('token', data.data.token)
                    dispatch({ type: 'login', payload: true })
                    navigate('/users')
                    swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        icon: 'success',
                        title: 'Sejá bem vindo',
                    })
                    setUser('')
                    setPassword('')
                } else {
                    swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'error',
                        title: 'User/Password Invalid',
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000
                    })
                    setUser('')
                    setPassword('')
                }
            }, 1000);
        } catch (err) {
            console.log(err)
            swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'User/Password Invalid',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000
            })
        }
    }

    return (
        <div className="bg-blue-400 w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col bg-red-400 h-1/2 w-1/2 justify-center items-center">
                <label>User</label>
                <input
                    type="text"
                    value={user}
                    onChange={ (e) => setUser(e.target.value) }
                    className="w-96 "    
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                    className="w-96"    
                />

                <button onClick={() => loginPressed()}>Login</button>
            </div>
        </div>
    )
}

export default Login