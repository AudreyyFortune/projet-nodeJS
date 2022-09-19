import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PatrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
});

export const PatryModel = mongoose.model("patries", PatrySchema);
