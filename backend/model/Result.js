import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ResultSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    }
}); 

export const ResultModel = mongoose.model("results", ResultSchema);