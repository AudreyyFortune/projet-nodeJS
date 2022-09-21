import React from "react";

function Logout({ user, setUser }) {

    return (
        <form onSubmit={(e) => { e.preventDefault(); setUser('') }} className="form">
            Connecté en tant que ... {user}
            <button type="submit" value="Logout" className="btn">Logout</button>
        </form>
    );
}

export default Logout;
