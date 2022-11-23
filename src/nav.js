const express = require("express");
const app = express(); 
const port = 3000; 

app.get("/",(req,res)=>{
    res.send("welcome to express.js home page");
}  );
app.get("/about",(req,res)=>{
    res.send("welcome to about page");
}  );
app.get("/Contact",(req,res)=>{
    res.send("welcome to Contact page");
}  );
app.get("/temp",(req,res)=>{
    res.send([{
        id:1,
        name:"sharad",
    }]);
}  );

app.listen(port, ()=>{
    console.log(`port number is ${port} `);
} );