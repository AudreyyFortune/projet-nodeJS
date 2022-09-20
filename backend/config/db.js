import mongoose from 'mongoose';

export const connectDB = () => {
    try {
        mongoose.connect('mongodb+srv://audrey:12345@cluster0.6m0masv.mongodb.net/projetNodeJs?retryWrites=true&w=majority')
            .then(r => console.log('db connection'))
            .catch(e => console.log(e))

    } catch (error) {
        console.log(error)
    }
}
