const express =require("express");
const router = express.Router();

// index 
router.get("/",(req,res)=>{
    res.send("GET for posts");
});

// show 
router.get("/:id",(req,res)=>{
    res.send("GET for post ID");
});

// post 
router.post("/",(req,res)=>{
    res.send("post for post");
});

//delete
router.delete("/:id",(req,res)=>{
    res.send("DELETE for post id");
});

module.exports = router;