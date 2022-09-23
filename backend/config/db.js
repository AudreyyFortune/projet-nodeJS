import mongoose from 'mongoose';
import { db_connection } from './config.js'

const DB_CONNECTION = db_connection;

export const connectDB = () => {
    try {
        mongoose.connect(DB_CONNECTION)
            .then(r => console.log('db connection'))
            .catch(e => console.log(e))

    } catch (error) {
        console.log(error)
    }
}
