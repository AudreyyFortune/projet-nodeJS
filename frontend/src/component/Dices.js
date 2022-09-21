import "./../App.css";
import React from "react";
import { useEffect, useState } from 'react';


export default function DisplayDices() {

    const [dicesArray, setDicesArray] = useState([]);
    const [nombreOccurenceDice, setNombreOccurenceDice] = useState(0);
    const [messageOccurenceDice, setMessageOccurenceDice] = useState("");

    
    const handleFiveDicesGet = async (e) => {
        e.preventDefault();
        try {
            fetch('http://localhost:3000/fiveDice')
                .then(response => response.json())
                .then(data => {
                    setDicesArray(data.dices)
                    setNombreOccurenceDice(data.nombre)
                    setMessageOccurenceDice(data.message)
                })
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        // console.log(dicesArray)
        // console.log(nombreOccurenceDice)
        // console.log(messageOccurenceDice)
    }, [dicesArray, nombreOccurenceDice, messageOccurenceDice])

    return (
        <>
            <h3>Tu veux tenter ta chance au Game Yams ? C'est par ici ...</h3>
            <button onClick={handleFiveDicesGet} className="btn">Lancer les dés</button>
            <div>
                { dicesArray.length > 0 ? dicesArray.map((e, i) => {
                    return <span key={i} className="result-dices">{e}</span>
                }) : null }
            </div> 
            <p>{ messageOccurenceDice }</p>
            <p>{ nombreOccurenceDice }</p>
            
        </>
    )

}
