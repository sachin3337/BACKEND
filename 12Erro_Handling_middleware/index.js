const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();


const checkToken =(req, res, next)=>{
    let {token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api", checkToken,(req,res)=>{
    res.send("Data")
})


app.get("/",(req,res)=>{
   res.send("Welcome to root page ");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.use((err, req, res, next)=>{
     let {status = 500,  message = "some error"} = err; // in case some error and status code not found
     res.status(status).send(message);
    
    // next(err); // normal next() give the controll  to next middleware
              // next(err) give the controll to next error handling middleware
});

// app.use((err, req, res, next)=>{
//     console.log("------------Error2-----------");
//     next(err); // if after the ccurrent middleware is no one next error handling middleware then cotroll gose to express default middleware
// });

app.get("/admin",(req,res)=>{
    throw new ExpressError(404, "Access to admin is Forbidden")
})

app.listen(8080 ,()=>{
      console.log("App is listen on port 8080");
});