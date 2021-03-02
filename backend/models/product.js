const mongoose = require('mongoose')
const postSchema=mongoose.Schema({

    title:{type:String , required:true,default:'hello'},
    description:{type:String , required:true,default:'my content is: '},
    price:{type:Number , required:true,default:0},
})

module.exports = mongoose.model('Product',postSchema)
