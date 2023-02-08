import React, { useEffect, useState } from "react";
import swal from "sweetalert2"
import API from "../../API";

const Empresas = () => {

    const [ empresa, setEmpresa ] = useState([])

    useEffect( () => {
        const empresaGet = async () => {
            const result = await API.get('/empresa/busca')
            console.log(result.data)
            setEmpresa(result.data)
        }
        empresaGet()
    }, [])

    return (
        <div>
            <label>Filtrar por Nome ou Código Nova</label>
            <input
                type="text"
                // onBlur={(event) => {
                //     const search = event.target.value
                //     const resultSearch = empresa.filter(empresaSearch => empresaSearch.nameEmpresa.includes(search))
                //     setEmpresa(resultSearch)
                // }}
            />
            <button
                onClick={() => {
                    swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'info',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        text: 'Em desenvolvimento...'
                    })
                }}
            >
                Adicionar Empresa
            </button>

            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Ativo</th>
                            <th>Cód.Nova</th>
                            <th>Nome</th>
                            <th>Regional</th>
                            <th>Comercial</th>
                            <th>Ações</th>
                        </tr>
                        {empresa.map(list => (
                            <tr key={list.id}>
                                <td>{list.active}</td>
                                <td>{list.codNova}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Empresas