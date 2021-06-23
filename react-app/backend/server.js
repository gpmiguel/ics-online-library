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
    gfs.collection('uploads');
});

app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    
    
    if (!file || file.length === 0) {
        return res.status(404).json({
        err: 'No file exists'
        });
    }
  
      // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);

    } else {
        res.status(404).json({
        err: 'Not an image'
        });
    }
    });
});

app.get('/pdf/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    
    
    if (!file || file.length === 0) {
        return res.status(404).json({
        err: 'No file exists'
        });
    }
  
      // Check if pdf
    if (file.contentType === 'application/pdf') {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);

    } else {
        res.status(404).json({
        err: 'Not pdf'
        });
    }
    });
});

app.use("/", require("./routes/route"));


app.listen(port, ()=> {
    console.log(`Server is running in port: ${port} 🔥`);
})
