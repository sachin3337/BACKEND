
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const { v4: uuidv4 } = require('uuid');
uuidv4();


// connection estblish
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "Rajput@3733"
});


//========================= automatic using fetal data ==========

//  

// inserting new data
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";

// let data =[];
// for(let i =1; i<=100;i++){
//     data.push(getRandomUser());
// };


// connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });
// connection.end();


//================================================================
// manualy insert the data
// let users = [ 
//     ["123b", "212445223_newuser", "abfc@gamil", "abc1230"],
//     ["123c", "2124243_newuser", "abcd@gamil", "abc110"]
// ];
//=====================================================================


// home route that shows the count of total no of user in user table
app.get("/", (req, res) => {
    let q = `select count(*) from user;`
    try {
        connection.query(q, (err, result) => { // it make connection with sql
            if (err) throw err; // q is passed if error in q it trow error 
            let count = result[0]["count(*)"]; // it return the result of query
            res.render("home.ejs", { count });
        });

    } catch (err) { // here error catch
        console.log(err);
        res.send("some error in database");
    }

});


// home/user -- this route show the total user 
app.get("/user", (req, res) => {
    let q = `select * from user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(result);
            res.render("showUsers.ejs", { users });
        });

    } catch (err) { // here error catch
        console.log(err);
        res.send("some error in database");
    }
});

//EDIT route
app.get("/user/:id/edit", (req, res) => { // it give response when they click edit me
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`; // take the id of url match with the data in database
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);// if id match then print the match data
            let user = result[0]; // result zero means first user of that matched array
            res.render("edit.ejs",{user}); // give to edit.ejs there is edit button after click that they send request to patch
        });

    } catch (err) { // here error catch
        console.log(err);
        res.send("some error in database");
    }
});

//UPDATE ROUTE
app.patch("/user/:id",(req,res)=>{
      let { id } = req.params;
      let{password : formPass, username : newusername}=req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;  // it match the id if match then take a result from database
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password ){ // after the data of id match then check password is not match with entered password then give error
                res.send("WRONG PASSWORD!!")
            }else{
                let q2 =`UPDATE user SET username='${newusername}' where id ='${id}'`; // if password match then set username to newusername where id are match
                connection.query(q2, (err, result) =>{
                    if (err) throw err;
                    res.redirect("/user");// after all data are updated
                } )
            }
        });

    } catch (err) { // here error catch
        console.log(err);
        res.send("some error in database");
    }
});

app.delete("/user/:id",(req, res)=>{ // selete the use
    let {id} = req.params;
     let q = "DELETE FROM user WHERE id = ?";
     connection.query(q, [id], (err, result) => {
        res.redirect("/user");
    });
})

app.post("/user/add",(req,res)=>{ // add user
    let { id, email,name} = req.body;
    let q = "INSERT INTO user (id, email,name) VALUES (?, ?, ?)";

    connection.query(q, [id, email,name], (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).send("Internal Server Error");
        }
        res.redirect("/user");
    });
});




app.listen("8080", () => {
    console.log("server is listening to port 8080");
});



