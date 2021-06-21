const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'frontend/build')));

mongoose.connect("mongodb+srv://c4ladmin:icsadmin@icslibrarysystem.5tt8e.mongodb.net/icslibrarysystem", 
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }
);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established.");
});

app.use("/", require("./backend/routes/route.js"));

app.listen(port, ()=> {
    console.log(`Server is running in port: ${port} 🔥`);
})
