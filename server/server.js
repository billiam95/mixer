const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

const drinksController = require('./controllers/drinks.js');
app.use('/drinks', drinksController)

app.listen(3000, () => {
    console.log('listening for mixer...');
})
mongoose.connect('mongodb://localhost:27017/mixerBack')
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
})
