require('dotenv').config();
const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const imageGallaryRouter = require('./routes/imageGallary');

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//database connection
mongoose.connect(process.env.MONGO_URI, () => {
    console.log('connected to db');
});

app.use('/api', imageGallaryRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
