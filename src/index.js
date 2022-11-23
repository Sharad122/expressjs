const express = require("express");
const app = express();
const path = require("path");



const staticpath = path.join(__dirname,"../public");
app.use(express.static(staticpath));

// app.get("/",(req,res)=>{
//     console.log("website is live")
// })

app.listen(8000, ()=>{
    console.log("port number is 8000");
} );