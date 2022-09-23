import "./../App.css"; 
import React from "react";
import { useEffect, useState } from 'react';


export default function DisplayPastries() {

    const [pastries, setPastries] = useState({});

    const data = async () => {
        let response = await fetch('http://localhost:8000/');
        let data = await response.json();
        return data;
    }

    useEffect(() => {
        data()
            .then(data => setPastries(data))
    }, [])

    useEffect(() => {
        // console.log(pastries)
    }, [pastries])

    return (
        <div>
            <h1>Bienvenu chez Backery ! </h1>
            <h2>Voici la liste de nos différents pâtisseries à gagner</h2>
            {pastries.length >= 0 ? (
                pastries.map((e, i) => {
                    return <p key={i}>{e.name} ({e.number})</p>
                })
            ) : 'Zéro Gâteaux .... :('
            }
        </div>
    )
}