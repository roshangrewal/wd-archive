const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/scheduleDB', {useNewUrlParser: true, useUnifiedTopology: true });

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
  name: 'Welcome to your Schedule of Operation :)'
})
const item2 = new Item ({
  name: 'Hit add button to schedule operation :)'
})
const item3 = new Item ({
  name: '<-- delete schedule operation by clicking on checkbox :) '
})
const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model('List', listSchema);

app.get('/', function(req, res) {
  Item.find({}, function(err, foundItems){

    if(foundItems.length === 0){
      Item.insertMany(defaultItems, function(err){
        if(err){
          console.log(err);
        } else {
          console.log('Successfully saved default items to DB :) ');
        }
      });
      res.redirect('/');
    } else {
      res.render('list', { operTitle: 'Today', newListItems: foundItems });
    }
    
  });
});

app.post('/', function(req, res){
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if(listName === 'Today'){
    item.save();
    res.redirect('/');
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect('/' + listName);
    });
  }
});

app.post('/delete', function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if(listName === 'Today') {
    Item.findByIdAndRemove(checkedItemId, function(err){
      if(!err) {
        console.log("Successfully deleted checked item :)");
        res.redirect('/');
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if(!err) {
        res.redirect('/' + listName);
      }
    });
  }
})

app.get('/:customListName', function(req, res){
  const customList = _.capitalize(req.params.customListName);

  List.findOne({name: customList}, function(err, foundList){
    if(!err){
      if(!foundList){
        //create a new list
        const list = new List({
          name: customList,
          items: defaultItems
        });
        list.save();

        res.redirect('/' + customList);

      } else {
        //show an existing list
        res.render("list", { operTitle: foundList.name, newListItems: foundList.items });
      }
    }
  });

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
