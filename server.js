//const require
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const PORT = process.env.PORT || 5000;


//app
app.use(cors());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.listen(PORT);
console.log("ok")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'home.html'));
    console.log("server is running")
});
app.get('/falconry', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'falconry.html'));
    console.log("server is running")
});
app.get('/windows', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'windows.html'));
    console.log("server is running")
});
app.get('/website', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', 'website.html'));
    console.log("server is running")
});

