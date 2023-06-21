const express = require("express")
const app = express()
const router = express.Router()
const userRoutes = require("./routes/userRoutes")
const noteRoutes = require("./routes/noteRoutes")

const mongoose = require("mongoose")



app.use("/user",userRoutes)
app.use("/note",noteRoutes)


app.get("/",(req,res)=>{
    res.send("Hlo from home")
})

// then called after when our connect established
mongoose.connect("mongodb+srv://abnuj:abnuj@cluster0.xe6vvtq.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{

    app.listen(8080,()=>{
        console.log("Server start at port : 8080")
    })
    
}) 
.catch((error)=>{
console.log(`we have some error baby : ${error}`)
})






