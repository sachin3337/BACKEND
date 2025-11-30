const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path")

// ========================== EXPRESS SESSION===============================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,// resave - session agar true rayo t wah kai bhi change nahi hoyo tri new sassion save kare saveUninitialized:true} je session unitiliza uku save karo
    saveUninitialized: true
};
app.use(session(sessionOptions));
app.use(flash()); // it use to show something happen after referesh it will also remove


app.use((req,res,next)=>{ // without righting inside the /hello we can use middleware
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name = "anonymouse" } = req.query;
    req.session.name = name;
    if (name === "anonymouse") {
         req.flash("error", "User not register successfully");
    } else {
        req.flash("success", "User register successfully");
    }

    res.redirect("/hello")
});

app.get("/hello", (req, res) => {
    // res.locals.successMsg = req.flash("success");
    // res.locals.errorMsg = req.flash("error");
    res.render("page.ejs", { name: req.session.name });
});

// app.get("/test", (req,res)=>{
//     res.send("test successfull");
// });

// counting the request
// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }

//     res.send(`you sent a request ${req.session.count} time`);
// });





































// const cookieParser = require("cookie-parser"); // installing because we can access cookie
// =======================================cookies =============================================
// app.use(cookieParser("secretcode")); // use for not modify the cookies
//  // for access cookie to all routes

//  app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("make-in", "china",{signed:true});
//     res.send("signed cookie send");
//  });

//  app.get("/verify",(req,res)=>{ // use to verify if cookie is changed or not (tampered or not)
//     console.log(req.signedCookies); // if cookie is changed it return null
//     res.send("verified");
//  });

// app.get("/getcookies",(req,res)=>{
//     res.cookie("Greet","namate");
//     res.cookie("madeIn","India");
//     res.send("send you some Cookies!");

// });

// app.get("/greet",(req,res)=>{
//     let {name= "sachin"} = req.cookies; // if inside the cookie name is not define then it take the name sachin
//     res.send(`hi, my name is ${name}`) // access the name from cookies 
// })

// app.get("/",(req,res)=>{
//     console.log(req.cookies); // using cookie parser it is possible to access cookies
//     res.send("Hi, I am root!");
// });
// ================================ END OF  COOKIES =====================================

// app.use("/users", users); // if request match on /users then check inside the users and user is another imported file
// app.use("/posts", posts);
// ================================END OF EXPRESS ROUTER ================================

app.listen(8080, () => {
    console.log("server listen on port 8080");
});