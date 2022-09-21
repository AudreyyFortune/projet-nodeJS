import "./../App.css";
import React from "react";

export default function DisplayDateTime() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const hour = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

    return (
        <p className="datetime">{date} - {hour}</p>
    )

}