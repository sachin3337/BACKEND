const mongoose = require('mongoose');
main().then((res) => {
    console.log("connecction successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLenght:20,
    },

    author:{
        type:String,
    },

    price:{
        type:Number,
        min:[11, "Price is too low for Amazon selling"],
    },

    discount:{
        type:Number,
        default:0 ,
    },

});

const Book = mongoose.model("Book",bookSchema)

Book.findByIdAndUpdate("687cc6cca5c02d6c57e9dab3",{price:-5000},{runValidators:true})
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err.errors.price.properties.message);
});

// const Book1 = new Book({
//     title:"Engineering M-2",
//     author: "sharma ji",
//     price: 456
// });
// Book1.save().then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// });