const express = require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const userModel = require("./models/user")
const blogModel = require("./models/blog")
const multer = require("multer")

const fs = require('fs');
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });


const upload = multer({ storage: storage });

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/users")

const PORT = 3001;



app.put('/create',upload.single('file'),(req,res)=>{
    const { title, topic, blog } = req.body;
    const file = req.file;
    blogModel.create(req.body)
        .then(blog1=>res.json(blog1))
        .catch(err => res.json(err))
        console.log('Title:', title);
        console.log('Topic:', topic);
        console.log('Blog:', blog);
        console.log('File:', file);
      
    res.send('Blog created successfully');
})

app.post('/login',(req,res)=>{
    const {username,password}=req.body
    userModel.findOne({username:username})
    .then(user=>{
        if(user){
            if(user.password===password)
                res.json("approve")
            else
                res.json("wrong creds")
        }
        else
            res.json("no existence")
    })
})

app.post('/register',(req,res)=>{
    userModel.create(req.body)
        .then(users => res.json(users) )
        .catch(err=>res.json(err))
})



app.listen(PORT,()=>console.log(`the server is running on port ${PORT}`))