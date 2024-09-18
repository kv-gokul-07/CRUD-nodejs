const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');

const productsRoutes = require('./routes/product.route.js');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
dotEnv.config();

//routes miidleware
app.use("/api/products", productsRoutes);

const role = process.env.ROLE || 8000;
const dbURL = process.env.DATABASE_URL;

mongoose.connect(dbURL)
  .then(() =>  {
    console.log('<----------------Connected to Database!---------------->')
    app.listen(role, () => {
        console.log(`Server is running on port ${role}`);
    })
  }).catch(() => {
    console.log('<----------------Sorry Database is not connected!---------------->')
  });