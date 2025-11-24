
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res) => {
    console.log("connection successful")
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
}

let allChats =[
    {
        from: "rahul",
        to: "anita",
        msg: "Are you joining the meeting today?",
        created_at: new Date()
    },
    {
        from: "anita",
        to: "rahul",
        msg: "Yes, I’ll be there at 4 PM sharp.",
        created_at: new Date()
    },
    {
        from: "arjun",
        to: "neha",
        msg: "Can you share the project files?",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "arjun",
        msg: "Sure, sending them now.",
        created_at: new Date()
    },
    {
        from: "deepak",
        to: "priya",
        msg: "Happy birthday! 🎉",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "deepak",
        msg: "Thank you so much 😊",
        created_at: new Date()
    },
    {
        from: "sanya",
        to: "rohit",
        msg: "Don’t forget the team dinner at 8.",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "sanya",
        msg: "Noted! See you there.",
        created_at: new Date()
    },
    {
        from: "vikas",
        to: "divya",
        msg: "Your code has some bugs. Want help?",
        created_at: new Date()
    },
    {
        from: "divya",
        to: "vikas",
        msg: "Yes please, I’ve been stuck for hours!",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);