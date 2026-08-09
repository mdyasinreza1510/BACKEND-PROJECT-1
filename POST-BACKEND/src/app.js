const express=require('express');

const multer=require('multer');//to acces the form-data format

const postmodel= require('./models/post.model');
const cors = require ('cors')

const uploadFile= require("./services/storage.service")

const app=express();

app.use(cors())

app.use(express.json());//this middleware is used only for raw typedata we use another middle to acces imageas and etc


const upload=multer({storage:multer.memoryStorage()})
//multer ka use hm files bhejne keliye krte isiliye file ko read krn ka trke alag rhta hai to file ko read krne keliye multer ka use krte hain 

app.post('/create-post',upload.single("image"), async(req,res)=>{
//req.body me jo image ki key("image") hai wahi ham upload.single me dalenge

    //ab file jo req.body se ayi hai usko dikhane keliye hm krenge

    console.log(req.body);
    console.log(req.file);
    //ab jo hme buffer meilega console me wahi hmara actual file hai

    //yaha pe hmne ek variable banaya result jisme uploadfile function me hmne 'req.file.buffer' joki image ka data hai usko pass kiya  ab ye data jayega function me aur fir wo buffer upload hoga iamge kit me aur image kit return krega ek url
    const result=await uploadFile(req.file.buffer)
    console.log (result)


    const post=await postmodel.create({
        image:result.url,
        caption:req.body.caption
        //yaha pe mdodel k zriya post  create kiye aur image me url upload kiye jo image kit se aya hai, aur caption jo body se aya hai
    })

    res.status(201).json({
        messege:"psot created sucessfully",
        post
    })

})

app.get('/getPost', async (req,res)=>{
    const getpost= await postmodel.find()
    res.status(200).json({
        messege:"data of the post fetched sucessfully:",
        post:getpost
    })

})




module.exports=app