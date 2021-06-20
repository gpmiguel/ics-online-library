const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;
const jsonParse = bodyParser.json();
const urlencodedParse = bodyParser.urlencoded({ extended: false })


app.use(cors());
app.use(express.json());
app.use(jsonParse);
app.use(urlencodedParse);

mongoose.connect("mongodb+srv://c4ladmin:icsadmin@icslibrarysystem.5tt8e.mongodb.net/icslibrarysystem", 
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }
);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established.");
});

app.use("/", require("./routes/route"));

app.listen(port, ()=> {
    console.log(`Server is running in port: ${port} 🔥`);
})
