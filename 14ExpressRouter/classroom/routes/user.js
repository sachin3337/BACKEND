const express =require("express");
const router = express.Router(); // use this because seperation concern, easy to understand the code

// index - users
router.get("/",(req,res)=>{
    res.send("GET for users");
});

// show - user
router.get("/:id",(req,res)=>{
    res.send("GET for ID");
});

// post - users
router.post("/",(req,res)=>{
    res.send("post for users");
});

//delete- users
router.delete("/",(req,res)=>{
    res.send("DELETE for users");
});

module.exports = router;
