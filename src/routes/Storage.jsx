import { useState, useEffect } from 'react'

export default function Storage() {
    // const [storage, setStorage] = useState([]);

    // const getStorage = async () => {

    //     try {
    //         const response = await api.get('/storage', {
    //             headers: {
    //                 Authorization: `Bearer ${getItem('token')}`
    //             }
    //         })

    //         const storageList = response.data;
    //         setStorage(
    //             [storageList.map((s) => {
    //                 return {
    //                     id: s.id,
    //                     descricao: s.descricao,
    //                     qtd_estoque: s.qtd_estoque,
    //                     valor: s.valor,
    //                     imagem: s.imagem
    //                 }
    //             })]
    //         )

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getStorage()
    // }, [])
    return (
        <div>
            <h1>Storage</h1>
            {/* {
                storage.map((s) => {
                    return (
                        <tr key={s.id}>
                            <td>{s.descricao}</td>
                            <td>{s.qtd_estoque}</td>
                            <td>{s.valor}</td>
                        </tr>)
                })

            } */}

        </div>
    )
}

