import DisplayDateTime from './../component/DateTime.js'
import DisplayPastries from './../component/Pastries.js'
import UserBar from './../component/UserBar.js';
import DisplayDices from './../component/Dices.js'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {

    const [user, setUser] = useState('');

    return (
        <>
            <Link to='/results'>Voir les résultats du concours</Link>
            <DisplayDateTime />
            <DisplayPastries />
            <UserBar user={user} setUser={setUser} />
            <DisplayDices />
        </>
    )
}

