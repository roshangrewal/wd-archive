//jshint esversion:6

const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('<h1>Hello, there!</h1>');
});

app.get('/about', function(req, res) {
  res.send('Hey, My name is Roshan. Nice to see you here. As I am learning Node these days :) ');
});

app.get('/contact', function(req, res){
  res.send('<h2>Contact Me @ roshangrewal@hotmail.com</h2>');
});

app.get('/tech', function(req, res){
  res.send('<h2>I know JavaScript :) </h2>');
});

app.listen(3000, function(){
  console.log('Server started on port: 3000');
});
