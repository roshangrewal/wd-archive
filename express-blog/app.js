//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const _ = require('lodash');


const homeStartingContent = "Experienced Software Engineer with a demonstrated history of working in the software industry. Skilled in Data Science, Python, Data Structures, Algorithms, and Cyber Security. Strong engineering professional with M.Tech Degree focused in Computer Engineering (Cyber Security) from National Institute of Technology, Kurukshetra.";
const aboutContent = "Experienced Software Engineer with a demonstrated history of working in the software industry. Skilled in Data Science, Python, Data Structures, Algorithms, and Cyber Security. Strong engineering professional with M.Tech Degree focused in Computer Engineering (Cyber Security) from National Institute of Technology, Kurukshetra.";
const contactContent = "Experienced Software Engineer with a demonstrated history of working in the software industry. Skilled in Data Science, Python, Data Structures, Algorithms, and Cyber Security. Strong engineering professional with M.Tech Degree focused in Computer Engineering (Cyber Security) from National Institute of Technology, Kurukshetra. Contact on roshangrewal@hotmail.com";

mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model('Post', postSchema);


app.get('/', function(req, res){
  // const home = homeStartingContent;
  Post.find({}, function(err, posts){
    res.render('home', {
      home: homeStartingContent,
      posts: posts
    });
  });
  
});

app.get('/about', function(req, res){
  res.render('about', {about: aboutContent} );
});

app.get('/contact', function(req, res) {
  res.render('contact', {contact: contactContent});
});

app.get('/compose', function(req, res){
  res.render('compose');
});
app.post('/compose', function(req, res){
  // console.log(req.body.postTitle);
  // console.log(req.body.postBody);
  const post = new Post ({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  // console.log(post);
  post.save(function(err){
    if(!err){
      res.redirect('/');
    }
  });
  
});

app.get('/posts/:postId/', function(req, res){
  const requestedPostId = req.params.postId;
    Post.findOne({_id: requestedPostId}, function (err, post) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    });
  // let reqParam = req.params.postName.replace(/[^\w]/g, '').toLocaleLowerCase(); //Regex to remove everything except word n number and make everything to lowercase
  // let reqParam = _.lowerCase(req.params.postName);
  // posts.forEach(function(post){
    // const requestedPostId = req.params.postId;
    // let postsTitle = post.title.replace(/[^\w]/g, '').toLocaleLowerCase() //Regex to remove everything except word n number and make everything to lowercase
    // let postsTitle = _.lowerCase(post.title);
    // if(postsTitle === reqParam){
    //   // console.log('Match Found');
    //   res.render('post', {
    //     title: post.title,
    //     content: post.content
    //   })
    // }
    // else {
    //   console.log('Not a match.');
    // }
  // })
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
