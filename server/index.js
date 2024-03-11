import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import movieRoute from './routes/movies-routes.js'

const app = express();

dotenv.config();

const port = process.env.PORT;
const mongoDB = process.env.MONGO_DB_URL


const connect = async () => {
    try {
        await mongoose.connect(mongoDB)
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
} 
 
mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("mongodb connected");
});

//middlewares

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });

app.use(express.json());

app.use('/api/movies', movieRoute)




//app listening on port 3005

app.listen(port, () => {
    connect()
    console.log(`server running on ${port}`);
})