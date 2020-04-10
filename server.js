const express = require('express')
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
var db;


app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

MongoClient.connect('mongodb+srv://debot:debot@turnips-rg1xo.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

