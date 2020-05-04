const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hackernewsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const postSchema = {
    title: String,
    url: String,
    text: String
};

const Post = mongoose.model('Post', postSchema);

//Routes
app.get('/', function (req, res) {
    Post.find({}, function(err, posts){
        res.render('home', {
          posts: posts
        });
    });
});

app.get('/welcome', function (req, res) {
    res.render('welcome');
});

app.get('/new', function (req, res) {
    res.render('new');
});

app.get('/threads', function (req, res) {
    res.render('threads');
});

app.get('/past', function (req, res) {
    res.render('past');
});

app.get('/comments', function (req, res) {
    res.render('comments');
});

app.get('/ask', function (req, res) {
    res.render('ask');
});

app.get('/show', function (req, res) {
    res.render('show');
});

app.get('/jobs', function (req, res) {
    res.render('jobs');
});

app.get('/submit', function (req, res) {
    res.render('submit');
});
app.post('/submit', function(req, res){
    const post = new Post ({
      title: req.body.postTitle,
      url: req.body.postUrl,
      text: req.body.text
    });
    // console.log(post);
    post.save(function(err){
      if(!err){
        res.redirect('/');
      }
    });
});

app.get('/login', function (req, res) {
    res.render('login');
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});