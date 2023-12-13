import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// import api from '../services/api';
// import { getItem, removeItem } from '../utils/storage';

import logoutbtn from '../assets/log-out-feather-icon.png'
import './Home.css'


export default function Home() {
    // const [user, setUser] = useState([]);
    // const navigate = useNavigate();

    // const getUser = async () => {

    //     try {
    //         const response = await api.get('/usuario', {
    //             headers: {
    //                 Authorization: `Bearer ${getItem('token')}`
    //             }
    //         });

    //         const data = response.data
    //         setUser(data);
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    // async function handleExit() {
    //     try {
    //         removeItem('token');
    //         navigate('/');

    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    // useEffect(() => {
    //     getUser();
    // }, [])

    return (
        <nav className='navbar_home'>
            <div>
                <h1>Olá, user</h1>
                <img className='logout_btn' src={logoutbtn} alt="logout" />
            </div>

            <Link to={`/client`}>Clientes</Link>
            <Link to={`/storage`}>Estoque</Link>
            <Link to={`/sales`}>Vendas</Link>
        </nav>
    )
}
