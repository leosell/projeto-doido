import React, { useState } from "react"
import API from "../../API/index.js"
import swal from "sweetalert2"

const Login = () => {

    const [ user, setUser ] = useState()
    const [ password, setPassword ] = useState()

    const loginPressed = async () => {
        console.log(user)
        console.log(password)
        try {
            console.log('antes de enviar para api')
            const data = await API.post('/login', { 
                user: user,
                password: password 
            })
            console.log('depois de enviar para api')
            if (data.status === 200) {
                await localStorage.setItem('token', data.data.token)
                swal.fire({
                    icon: 'success',
                    title: 'Sejá bem vindo',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                swal.fire({
                    icon: 'error',
                    title: 'User/Password Invalid',
                    showCancelButton: false,
                    showConfirmButton: true
                })
                setUser('')
                setPassword('')
            }
        } catch (err) {
            console.log(err)
            swal.fire({
                icon: 'error',
                title: 'User/Password Invalid',
                showCancelButton: false,
                showConfirmButton: true
            })
        }
    }

    return (
        <div className="">
            <label>User</label>
            <input type="text" value={user} onChange={ (e) => setUser(e.target.value) } />

            <label>Password</label>
            <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />

            <button onClick={loginPressed}>Login</button>
        </div>
    )
}

export default Login