"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var cors = require('cors');

var Post = require('./models/post');

var app = express();
var uri = "mongodb+srv://backendprojectdtu:Backend1234@cluster0.t5ddn.mongodb.net/posts?retryWrites=true&w=majority";
var dbConnectionString = 'mongodb+srv://javad:8EJmKUw9eJ4wOVWh@cluster0.nuovb.mongodb.net/MEAN?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) console.error(err);else console.log("Connected to the mongodb");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); // Request methods you wish to allow

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request headers you wish to allow

  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});
app.use(cors());
app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(function (resault) {
    res.status(201).json({
      message: 'post added sucessfully from res',
      postId: resault._id
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
app.get('/api/posts', function (req, res, next) {
  Post.find().then(function (documents) {
    return res.status(200).json({
      message: 'post fetched succesfully',
      posts: documents
    });
  });
});
app["delete"]('/api/posts:id', function (req, res, next) {
  Post.deleteOne({
    _id: req.params.id
  }).then(function (resault) {
    res.status(200).json({
      message: 'post deleted'
    });
  });
});
module.exports = app;