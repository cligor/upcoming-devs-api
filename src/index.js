const express = require('express');
const mongoose = require('mongoose');
const developerRoutes = require('./routes/developerRoutes');


const app = express();

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(developerRoutes);

app.listen(3333);
