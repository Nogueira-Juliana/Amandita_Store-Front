import React from 'react'

import logo from '../assets/logo_amandita.png';

export default function Login() {
    return (
        <div>
            <img className='imgLogin'
                src={logo}
                alt='logo'
            />
            <h2>Entre na sua conta</h2>

            <form>
                <label>E-mail</label>
                <input
                    type='current-email'
                />
                <label>Senha</label>
                <input
                    type='current-password'
                />
                <button>Entrar</button>
            </form>

        </div>
    )
}