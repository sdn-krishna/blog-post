const mongoose =require('mongoose')

const blogSchema=mongoose.Schema({
    title:String,
    topic:String,
    blog:String,
    file:Buffer
})

const blogModel =mongoose.model("blog",blogSchema)

module.exports=blogModel