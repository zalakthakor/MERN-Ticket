
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/user.js";
import ticketRouter from "./routes/tickets.js";
import 'dotenv/config';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use("/user", userRouter);
app.use('/tickets',ticketRouter);


const PORT = process.env.PORT|| 5000;
const uri ="mongodb://localhost:27017/MERNTicket";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

