const express = require('express')
const app = express()
const multer = require('multer')
const fs = require('fs')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'));
endpointRoot = 'http://127.0.0.1:8090/'

async function addToDo () {
  const n_todo = document.getElementById('item-entry')
  let subsec = document.getElementById("l_title").innerText;
  n_todo.addEventListener('submit', async function (event){
    event.preventDefault();

    const data = new FormData(n_todo);

    const dataJSON = JSON.stringify(Object.fromEntries(data))

    const response = await fetch(endpointRoot + 'newToDo',
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: dataJSON

    });
    loadjson(subsec);
    n_todo.reset();
  })
}

app.post('/newToDo', function(req, resp){
  let subsec = document.getElementById("l_title").innerText;
  try {
    jsonData = fs.readFileSync('ToDos.json', 'utf8');
    data = JSON.parse(jsonData);
  } catch (err) {
    console.log("File not found");
  }
  let sub = data[subsec]
  sub[req.body.inp_title] = req.body.inp_desc
  fs.writeFileSync("ToDos.json", JSON.stringify(data))
  resp.send(data)
  /* let subsec = document.getElementById("l_title").innerText;
  console.log("here")
  resp.send(200)
  if (subsec == "Select a ToDo"){
    resp.send(400);
  }
  let data = {};
  let jsonData = {};
  try {
    jsonData = fs.readFileSync('ToDos.json', 'utf8');
    data = JSON.parse(jsonData);
  } catch (err) {
    console.log("File not found");
  }

  let r_data = data[subsec]

  r_data[req.body.inp_title] = {
    desc: req.body.inp_desc,
    image: req.file.inp_img
  };

  jsonData = JSON.stringify(data);

  fs.writeFileSync('Todos.json', jsonData);
  loadjson(document.getElementById("l_title").innerText)
  res.send(200); */
});
