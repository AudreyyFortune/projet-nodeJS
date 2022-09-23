import "./../App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login({ setUser }) {

    const [login, setLogin] = useState('');

    useEffect(() => {
        // console.log(login)
    }, [login])

    const handleChangeLogin = (event) => {
        setLogin(event.target.value)
    }

    const userPost = (e) => {
        axios.post('http://localhost:8000/', {
            user: login,
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); setUser(login); userPost() }} className="form">
            <fieldset>Login connexion</fieldset>
            <input type="text" onChange={handleChangeLogin} value={login} />
            <button type="submit" value="Login" className="btn">Login</button>
        </form>
    );
}

export default Login;
