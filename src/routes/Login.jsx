import React from 'react'

import logo from '../assets/logo_amandita.png';
import './Login.css'

export default function Login() {
    return (
        <div className='containerLogin'>
            <div>

                <h1>Login</h1>
                <img className='imgLogin'
                    src={logo}
                    alt='logo'
                />

            </div>

            <form className='formLogin'>
                <label for='email'>E-mail</label>
                <input
                    type='current-email'
                    name='email'
                    placeholder='E-mail'
                    required
                />
                <label for='senha'>Senha</label>
                <input
                    type='current-password'
                    name='senha'
                    placeholder='Senha'
                    required
                />
                <button className='login_btn'>Entrar</button>
            </form>

        </div>
    )
}