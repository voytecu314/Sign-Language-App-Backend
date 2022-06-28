import express from  'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from  'mongoose';
import loginRoutes from './routes/loginRoutes.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/', loginRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(
    app.listen(port, () =>
      console.log(
        "Database and Server listening on port:", port
      )
    )
  )
  .catch((err) => console.log(err));

//http://localhost:5000/
app.get('/', (req,res) => {
    res.send('Hi there')
})
