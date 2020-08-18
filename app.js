const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//IMPORT ROUTES
const itemsRoute = require('./routes/items');

app.use(cors())

app.use('/items', itemsRoute);

//ROUTES
app.get('/', (req,res) =>{
    res.send('Hello Word');
});

const PORT = 8000


//CONNET TO DB
mongoose.connect(
   process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, 
    () => console.log(`connected to Mongo DB!!! Port:${PORT}`)
);

app.listen(PORT);