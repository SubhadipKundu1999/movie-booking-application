const express = require('express');
const app = express();

const dotenv= require('dotenv');
const  mongoose  = require('mongoose');
dotenv.config();

const port = 3000;

//middlewares
app.use(express.json())
app.use("/",function (req,res,next){

console.log("middleware working");
next();
})


app.get("/",(req, res)=>{
    res.send("hii Server");

})

mongoose.connect(process.env.MONGODB_CONN_URI)
.then(()=>{
    console.log("mongodb connected successfully")
    return app.listen(port,()=>{
        console.log("listening from port", port)
    })
})
.catch(e=> console.log(e));

