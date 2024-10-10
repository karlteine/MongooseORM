import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import articleController from "./controllers/articleController"
mongoose.connect("mongodb+srv://karlk:QxWJNq7Xg0Obqg0u@cluster0.sfmjq.mongodb.net/");
const database = mongoose.connection;
import cors from "cors";
import bodyParser from "body-parser";


const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
  }));
  app.use(bodyParser.json());

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', articleController)

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});