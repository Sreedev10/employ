const Mongoose=require("mongoose")
let eSchema=Mongoose.Schema(
    {
        employeename:String,
        employeecode:String,
        place:String,
        district:String,
        Date:String
}
)
let eModel=Mongoose.model("employ",eSchema)
module.exports=eModel