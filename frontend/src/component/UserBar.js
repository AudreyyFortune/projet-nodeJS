import React from 'react';
import Login from "./Login";
import Logout from "./Logout";

function UserBar({ user, setUser }) {

    return (
        <>
            {user !== '' ? <Logout user={user} setUser={setUser} /> : <Login setUser={setUser} />}
        </>
    );
}

export default UserBar;
