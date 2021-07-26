const express = require('express');
const router = require('../routs/routs');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const url = process.env.MONGO_API ||
    'mongodb+srv://Hrach:wsG99AIrn84wUalu@cluster0.1fvmi.mongodb.net/bmw-project?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection = mongoose.connection;
dbConnection.on('error', error => console.log(`Error: ${error}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!');
})