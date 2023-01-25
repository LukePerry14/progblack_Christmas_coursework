const express = require('express');
const app = express();

const fs = require('fs');

const jayuo = './jsons/TodayToDo.json';
const jayum = './jsons/TmrToDo.json';
let dayJSON = require(jayuo);
let tmrJSON = require(jayum);
app.use(express.static('client'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/* end of reliances */

app.get('/TodayTitleToDo', function (req, resp) {
    try {
      resp.send(dayJSON);
    } catch (err) {
      console.log(err);
    }
});

app.get('/TmrTitleToDo', function (req, resp) {
    try {
        resp.send(tmrJSON);
      } catch (err) {
        console.log(err);
      }
});

app.get('/TodaydescToDo', function (req, resp) {
  try {
    resp.send(dayJSON);
  } catch (err) {
    console.log(err);
  }
});

app.get('/TmrdescToDo', function (req, resp) {
  try {
      resp.send(tmrJSON);
    } catch (err) {
      console.log(err);
    }
});

app.post('/TodaynewToDo', function (req, resp) {
    try {
      dayJSON[req.body.inptitle] = req.body.inpdesc;
      fs.writeFileSync(jayuo, JSON.stringify(dayJSON));
      resp.send(200);
    } catch (err) {
      console.log(err);
    }
});

app.post('/TmrnewToDo', function (req, resp) {
  try {
    tmrJSON[req.body.inptitle] = req.body.inpdesc;
    fs.writeFileSync(jayum, JSON.stringify(tmrJSON));
    resp.send(200);
  } catch (err) {
    console.log(err);
  }
});

app.post('/Todayitemdel', async function (req, resp) {
  try {
    const keysToRemove = [];
    keysToRemove.push(req.body.removeditem);
    dayJSON = Object.fromEntries(
    Object.entries(dayJSON).filter(([k]) => !keysToRemove.includes(k))
    );
    fs.writeFileSync(jayuo, JSON.stringify(dayJSON));
    resp.send(200);
  } catch (err) {
    console.log(err);
  }
});

app.post('/Tmritemdel', async function (req, resp) {
  try {
    const keysToRemove = [];
    keysToRemove.push(req.body.removeditem);
    tmrJSON = Object.fromEntries(
    Object.entries(tmrJSON).filter(([k]) => !keysToRemove.includes(k))
    );
    fs.writeFileSync(jayum, JSON.stringify(tmrJSON));
    resp.send(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
