import React, { useState } from 'react'
import './styles.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loginn, setLoginn] = useState(true);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }

    return (
        <div className="login">
            {
                loginn ?
                <>
                <h2>Iniciar sesion</h2>
                <form onSubmit={handleSubmitLogin}>
                    <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Ingresar</button>
                </form>
                <p>¿Eres nuevo? <span onClick={() => setLoginn(!loginn)}>Registrarse ahora</span></p>

                </> :
                <>
                <h2>Register</h2>
                <form onSubmit={handleSubmitRegister}>
                    <input type="text" placeholder="Usuario" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Ingresar</button>
                </form>
                <p>¿Ya eres usuario? <span onClick={() => setLoginn(!loginn)}>Iniciar sesión</span></p>
                </>
            }
        </div>
    )
}
