const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
mongoose.connect("mongodb+srv://c4ladmin:icsadmin@icslibrarysystem.5tt8e.mongodb.net/icslibrarysystem?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established.");
});


app.listen(port, ()=> {
    console.log(`Server is running in port: ${port} 🔥`);
})
