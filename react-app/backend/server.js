const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const AcademicPaperRouter =  require('./routes/resource_acad_paper');

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
mongoose.connect("mongodb+srv://admin:admin123@cluster0.hytir.mongodb.net/icslibrarysystem?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established.");
});

app.use('/add-academic-paper', AcademicPaperRouter);

app.listen(port, ()=> {
    console.log(`Server is running in port: ${port}`);
})