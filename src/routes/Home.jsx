import React from 'react'
import { Link } from 'react-router-dom'
import logoutbtn from '../assets/log-out-feather-icon.png'


export default function Home() {
    return (
        <nav className='navbar-home'>
            <img className='logout-btn' src={logoutbtn} alt="logout" />
            <Link to={`/client`}>Clientes</Link>
            <Link to={`/storage`}>Estoque</Link>
            <Link to={`/sales`}>Vendas</Link>
        </nav>
    )
}
