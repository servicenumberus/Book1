const express = require("express")
const noteRouter = express.Router()

noteRouter.post("/",(req,res)=>{

    res.send("post called from note Home")

})


noteRouter.get("/",(req,res)=>{
    res.send("get called from note Home")
})


module.exports = noteRouter