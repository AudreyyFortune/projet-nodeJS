import "./../App.css";
import React, { useState } from 'react';

function Login({ setUser }) {

    const [login, setLogin] = useState('');

    const handleChangeLogin = (event) => {
        setLogin(event.target.value)
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); setUser(login) }} className="form">
            <fieldset>Login connexion</fieldset>
            <input type="text" onChange={handleChangeLogin} value={login} />
            <button type="submit" value="Login" className="btn">Login</button>
        </form>
    );
}

export default Login;
