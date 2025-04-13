const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware to parsw JSON bodies
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ecosiumdemo')
    .then(() => {
        console.log('Fahad DB Connected!');
    })
    .catch((err) => {
        console.log(err);
    });

// Creating Schema
const timeSchema = new mongoose.Schema({
    time: {
        required: true,
        type: String,
    },
});


// Creating Model
const timeModel = mongoose.model('Times', timeSchema);

app.post('/times', async (req, res) => {
    const { time } = req.body;
    try {
        const newTime = new timeModel({ time});
        await newTime.save();
        res.status(201).json(newTime);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

// Get all items
app.get('/times', async (req, res) => {
    try {
        const time = await timeModel.find(); // Fetch all items from the database
        res.json(time);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});


const port = 8000;
app.listen(port, () => {
    console.log("Server is listening on port " + port)
})