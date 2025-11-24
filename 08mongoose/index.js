
const mongoose = require('mongoose');


main().then((res) => {
    console.log("connecction successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// delete deleteMany(),
User.findOneAndDelete({name:"rahul"})
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    });


// update findByIdAndUpdate()
// User.findOneAndUpdate('687caa24eb094611e99ced85',{age:5544436},{new:true})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
// });

//   find ========= User.find(), User.findMany(), User.findById()
// User.findById('687ca3c0ed49f8456d9d9f49').then((res)=>{
//     console.log(res)
//     // console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });

// insert ================================================
// User.insertMany([
//     {name:"rahul",email:"rahul@gmail.com",age:35},
//     {name:"jivan", email:"jivan@gmail.com",age:40},
//     {name:"sunil", email:"sunil@gmail.com",age:35}
// ]).then((res)=>{
//     console.log(res);
// });

// const user1 = new User({
//     name:"sachin",
//     email:"sachin@gmail.com",
//     age:22
// });

// const user2 = new User({
//     name:"vishal",
//     email:"vishal@gmail.com",
//     age:22
// });

// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });