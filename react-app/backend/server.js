const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://c4ladmin:icsadmin@icslibrarysystem.5tt8e.mongodb.net/icslibrarysystem", 
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection is established.");
});

app.use("/resource_acad_paper", require("./routes/resource_acad_paper"));
app.use("/resource_book", require("./routes/resource_book"));
app.use("/user", require("./routes/user"));

app.listen(port, ()=> {
    console.log(`Server is running in port: ${port} 🔥`);
})
