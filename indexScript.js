const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const fs = require("fs")


const fileNameForJSON = './ToDos.json';
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));


app.get('/', function(req, resp){
  let list = document.getElementById('list')
})

function addToDo(title, desc, img){
  return
}

app.post('/newToDo', function(req, resp){
  URL = document.URL
  file = URL //need to isolate portion of the URL that denotes which TODO list is open, make that biject to the relevant JSON section


  resp.send(200)
})

app.get('/TodayToDo', function(req, resp){
  
  resp.send(200)
})