const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({ // here creating the schema for customer order
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user:{
        type:Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User",userSchema);
const Post =mongoose.model("Post",postSchema);

// const addData = async()=>{
//     let user = await User.findOne({username: "Sachin Ghusinge"});

//     let post2 = new Post({
//         content:"hi, Sachin :)",
//         likes:234,
//     });

//     post2.user = user; // post ku user1 ki id s access kr

//     await post2.save();
//     // console.log(post1)

// }

// addData();


// const del = async()=>{
//     await Post.findByIdAndDelete("6889b00c91066b4c3ac326e5");
//     await Post.findByIdAndDelete("6889b00c91066b4c3ac326e4");
// }
// del();

const getData = async()=>{
    let result = await Post.findOne({}).populate("user");
    console.log(result);
}
getData();