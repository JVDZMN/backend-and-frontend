const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors')

const Post = require('./models/post');

const app = express();
const uri = "mongodb+srv://backendprojectdtu:Backend1234@cluster0.t5ddn.mongodb.net/posts?retryWrites=true&w=majority";

const dbConnectionString = 'mongodb+srv://javad:8EJmKUw9eJ4wOVWh@cluster0.nuovb.mongodb.net/MEAN?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
       console.error(err);
    else
       console.log("Connected to the mongodb"); 
  });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



app.use((req,res,next)=>{
       // Website you wish to allow to connect
       res.setHeader('Access-Control-Allow-Origin', '*');

       // Request methods you wish to allow
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   
       // Request headers you wish to allow
       res.setHeader('Access-Control-Allow-Headers',  "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
})

app.use(cors())

app.post('/api/posts',(req,res,next)=>{
    const post= new Post({
        title:req.body.title,
        content : req.body.content
    })
    post.save().then(resault =>{
        res.status(201).json({
            message:'post added sucessfully from res',
            postId:resault._id
        })
    }).catch(err =>{
        console.log(err)
    })
    
})

app.get('/api/posts',(req,res,next)=>{
    Post.find().then((documents)=>{
        return res.status(200).json({
            message:'post fetched succesfully'
            ,posts:documents})
            })
});

app.delete('/api/posts:id',(req,res,next)=>{
    Post.deleteOne({_id:req.params.id}).then(resault =>{
        res.status(200).json({message:'post deleted'})
    })
})
module.exports = app;