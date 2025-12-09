
const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true})); // use to read the urldata of post request that data not showing in url
app.use(express.json()) // use for read the json data of post request else they print undifine in both condition

// app.get("/register", (req, res) => {
//     let {user, password} = req.query;
//     res.send(`standard GET response. Welcome  ${user}`);
// });

// app.post("/register", (req, res) => {
//     let {user, password} =req.body;
//     res.send(`standard POST response. Username is :   ${user} and is : ${password}`);
//     res.send(`standard POST response. Username is :   ${user} and is : ${password}`);
//     console.log(req.body);
// });

// app.listen(port, () => {
//     console.log(`Listening to port: ${port}`);
// });