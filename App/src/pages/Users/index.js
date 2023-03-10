import React, { useEffect, useState } from "react"
import API from "../../API"
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const Users = () => {

    const [ user, setUser ] = useState([])
    const navigate = useNavigate()

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
            <button onClick={() => {
                navigate('/empresas')
            }}>
                Empresas
            </button>
            <h1>Users</h1>
            <label>Filtrar por Nome e Usuário</label>
            <input
                type="text"
                onBlur={(event) => {
                    const search = event.target.value
                    const resultSearch = user.filter(userSearch => userSearch.user.includes(search))
                    setUser(resultSearch)
                }} 
            />
            <button onClick={() => {
                    swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'info',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        text: 'Em desenvolvimento...'
                    })
                }
            }>
                Adicionar Usuário
            </button>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Ativo</th>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Usuário</th>
                            <th>Empresa</th>
                            <th>Ações</th>
                        </tr>
                        {user.map(list => (
                            <tr key={list.id}>
                                <td>
                                    {list.active}
                                </td>

                                <td>
                                    {list.name}
                                </td>

                                <td>
                                    {list.typeUser}
                                </td>
                                
                                <td>
                                    {list.user}
                                </td>

                                <td>
                                    {list.idEmpresa}
                                </td>

                                <td>
                                    <button onClick={() => {
                                        swal.fire({
                                            toast: true,
                                            position: 'top-end',
                                            icon: 'info',
                                            showConfirmButton: false,
                                            timer: 3000,
                                            timerProgressBar: true,
                                            text: 'Em desenvolvimento...'
                                        })
                                    }}>
                                        Editar
                                    </button>

                                    <button onClick={() => {
                                        swal.fire({
                                            toast: true,
                                            position: 'top-end',
                                            icon: 'info',
                                            showConfirmButton: false,
                                            timer: 3000,
                                            timerProgressBar: true,
                                            text: 'Em desenvolvimento...'
                                        })
                                    }}>
                                        Resetar Senha
                                    </button>

                                    <button onClick={() => {
                                        swal.fire({
                                            toast: true,
                                            position: 'top-end',
                                            icon: 'info',
                                            showConfirmButton: false,
                                            timer: 3000,
                                            timerProgressBar: true,
                                            text: 'Em desenvolvimento...'
                                        })
                                    }}>
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users