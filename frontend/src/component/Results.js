import "./../App.css";
import React from "react";
import { useEffect, useState } from 'react';

export default function DisplayResults() {

    const [results, setResults] = useState({});

    const data = async () => {
        let response = await fetch('http://localhost:8000/results');
        let data = await response.json();
        return data;
    }

    useEffect(() => {
        data()
            .then(data => setResults(data))
    }, [])

    useEffect(() => {
        // console.log(pastries)
    }, [results])

    return (
        <div>
            <h1>Page de Résultats du Concours</h1>
            {results.length >= 0 ? (
                results.map((e, i) => {
                    return <p key={i}>{e.user} : {e.name} - {e.date} {e.hour}</p>
                })
            ) : 'oups'
            }
        </div>
    )
}