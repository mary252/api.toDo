const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const totoro= require('totoro-node')
var dotenv = require('dotenv');

//load .env file
dotenv.load();
const toDo= require("./controllers/Todo")
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Support CORS for integrations **/
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});




app.post('/todo',[
  toDo.post
])
app.get('/todo',[
  toDo.get
])
app.post('/done/:id',[
  toDo.done
])
app.post('/undo/:id',[
  toDo.undo
])
app.delete('/delete/:id',[
  toDo.delete
])
app.listen(process.env.PORT, () => {});