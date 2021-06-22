const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const Grid = require('gridfs-stream');
const method = require('method-override');


const app = express();
const port = process.env.PORT || 3001;
const jsonParse = bodyParser.json();
const urlencodedParse = bodyParser.urlencoded({ extended: false })

const mongoURI = "mongodb+srv://c4ladmin:icsadmin@icslibrarysystem.5tt8e.mongodb.net/icslibrarysystem";

app.use(cors());
app.use(express.json());
app.use(method('_method'));
app.use(jsonParse);
app.use(urlencodedParse);

mongoose.connect(mongoURI, 
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }
);

var gfs;

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established.");
    gfs = Grid(connection.db, mongoose.mongo);
    gfs.collection('files');
});


app.use("/", require("./routes/route"));

app.listen(port, ()=> {
    console.log(`Server is running in port: ${port} 🔥`);
})
