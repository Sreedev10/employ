const Express=require("express")
const Mongoose=require("mongoose")
const Cors=require("cors")
const Bodyparser=require("body-parser")
const eModel=require("./models/employModels")

var employ=Express()
employ.use(Bodyparser.json())
employ.use(Bodyparser.urlencoded({extended:true}))

Mongoose.connect("mongodb+srv://college:college12345@cluster0.sonwgpf.mongodb.net/employdb?retryWrites=true&w=majority",{useNewUrlParser:true})

employ.get("/",(req,res)=>{
    res.send("welcome")
})

employ.post("/add",async(req,res)=>{
    let data=new eModel(req.body)
    console.log(data)
    await data.save()
    res.send(data)
})


employ.post("/viewallemploy",async(req,res)=>{
    let data=await eModel.find()
    res.send(data)
})


employ.listen(3000)