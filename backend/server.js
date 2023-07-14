import express from "express";
import connectDB from './config/dbConnect.js'
const app = express();
app.use(express.json());
import contentRouter from "./route/contentRoute.js";

app.use(contentRouter)
connectDB();
var Port = 4005;
app.listen(Port, () => {
  console.log(`App is running on ${Port}.`);
})