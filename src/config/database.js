import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function ConectDB() {
    await mongoose.connect(`mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD}@cluster1.exdn1fx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`)
        .then(console.log('Database connected successfully')).catch( (error) => {
            console.log(error, 'Unable to connect to database');
        } )
}

export default ConectDB();