import React, { useEffect, useState } from "react"
import API from "../../API"

const Users = () => {

    const [ user, setUser ] = useState([])

    useEffect(() => {
        const userGet = async () => {
            const result = await API.get('/user/busca')
            console.log(result.data)
            setUser(result.data)
        }
        userGet()
    }, [])

    return (
        <div>
            <h1>Empresas</h1>
            {user.map(list => (
                <li key={user.id}>
                    {list.user}
                    {list.name}
                    {list.typeUser}
                </li>
            ))}
        </div>
    )
}

export default Users