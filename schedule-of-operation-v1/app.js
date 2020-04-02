const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = ["Start Scheduling"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res) {

  const day = date.getDate();
  res.render('list', { operTitle: day, newListItems: items });

});

app.post('/', function(req, res){
  const item = req.body.newItem;
  // console.log(item);
  if(req.body.list === 'Work'){
    workItems.push(item);
    res.redirect('/work');
  }
  else {
    items.push(item);
    res.redirect('/');
  }
})

app.get('/work', function(req, res){
  res.render("list", { operTitle: "Work Schedule", newListItems: workItems });
});

app.post('/work', function(req, res){
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

app.get('/about', function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
