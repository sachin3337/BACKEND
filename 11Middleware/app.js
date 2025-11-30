const express = require("express");
const app = express();


// app.use("/",(req,res, next)=>{  // this is middleware exicute before the  server respond to request
//     console.log("hello everyone this is middleware 1 ");
//     next();            // next use to process next process of request
// });

// app.use("/",(req,res, next)=>{ // this is sencond middleware exicute after the first
//     console.log("hello everyone this is middleware 2 ");
//     next();
// });

app.use("/random",(req,res,next)=>{ // middleware for specific route
    console.log("I am only for random");
});


//utility middlewar
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname, req.path, req.time);  // req.method - GET, PUT, POST ,, req.hostname - localhost, req.path --> /, /home, /home/new
//     next();
// })

// app.use("/api",(req, res, next)=>{ //pass the token in url 
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

 const ckeckToken = (req, res, next)=>{ 
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
};

app.get("/api", ckeckToken, (req,res)=>{ // first check the token conditions then process next
    res.send("Data")
});

app.get("/",(req,res)=>{
    res.send("Response from get request or server")
});

app.use((req,res)=>{
    res.send("Page not found")
})


app.listen(8080,()=>{
    console.log("server run on port 8080")
});