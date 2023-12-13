import { useEffect, useState } from 'react'

export default function Client() {
    // const [clients, setClients] = useState([]);

    // const getClients = async () => {

    //     try {
    //         const response = await api.get('/clients', {
    //             headers: {
    //                 Authorization: `Bearer ${getItem('token')}`
    //             }
    //         })

    //         const clientList = response.data;
    //         setClients(
    //             [clientList.map((c) => {
    //                 return {
    //                     id: c.id,
    //                     nome: c.nome,
    //                     telefone: c.telefone,
    //                     endereco: c.endereco
    //                 }
    //             })]
    //         )

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getClients()
    // }, [])

    return (
        <div>
            <h1>Clientes</h1>
            {/* {
                clients.map((c) => {
                    return (
                        <tr key={c.id}>
                            <td>{c.nome}</td>
                            <td>{c.telefone}</td>
                            <td>{c.endereco}</td>
                        </tr>)
                })

            } */}

        </div>
    )
}
