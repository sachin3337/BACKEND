const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    addresses: [{
        location: String,
        city: String,
    },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: " sachin ghusinge",
        addresses: [{
            location: "room no-7 ghule park, mahadev nagar ,hadpsar",
            city: "pune" // we can add address here also if we are not using the push
        }]
    });
    user1.addresses.push({ location: "manjri, hadapsar", city: "pune" });
    let result = await user1.save();
    console.log(result);
}
addUsers();