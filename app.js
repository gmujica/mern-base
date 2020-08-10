const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) =>{
    res.send('Hello Word');
});


//CONNET TO DB
mongoose.connect(
   process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, 
    () => console.log('connected to Mongo DB!!! localhost:4000')
);

app.listen(4000);