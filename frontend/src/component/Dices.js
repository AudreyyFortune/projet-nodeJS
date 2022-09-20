import React from "react";
import { useEffect, useState } from 'react';


export default function DisplayDices() {

    const [dicesArray, setDicesArray] = useState([]);

    const handleFiveDicesGet = async (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:3000/fiveDice')
                .then(response => response.json())
                .then(data => setDicesArray(data.dices))
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        console.log(dicesArray)
    }, [dicesArray])

    return (
        <>
            <button onClick={handleFiveDicesGet}>Lancer les dés</button>
            <div>
                { dicesArray.length > 0 ? dicesArray.map((e, i) => {
                    return <p key={i}>{e}</p>
                }) : null }
            </div> 
        </>
    )

}
