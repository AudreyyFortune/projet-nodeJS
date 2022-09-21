import express from "express";
import session from 'express-session';
import path from "path";
import { fileURLToPath } from "url";

import { port, hostname } from './config/config.js'
import { connectDB } from "./config/db.js"
import route from "./route/routes.js";

// Constantes
const app = express();
const HOSTNAME = hostname;
const PORT = port;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'pug');

// Connexion à la BDD
connectDB();

//session
app.use(session({
    name: 'projet',
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));


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



