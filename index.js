import express from "express";
import mongoose from "mongoose";

import { port, hostname } from './config/config.js'
import { connectDB } from "./config/db.js"
import route from "./route/routes.js";

// Constantes
const app = express();
const HOSTNAME = hostname;
const PORT = port;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'pug');

// Connexion à la BDD
connectDB();


try {
    // App route
    app.use('/', route)

    // App start
    app.listen(PORT, function () {
        console.log(`App listening at http://${HOSTNAME}:${PORT}`);
    });
}
catch (err) {
    console.error("❌ Error", err.message);
}



