const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 2500;
const path = require('path')

var movies = require('./movies')


const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
    // console.log(movies)
})
app.get('/api/v1', (req, res) => {
    res.send(200, movies)
})

app.listen(port, ()=>{
    console.log("Booming on the legendary Port 2500!")
})