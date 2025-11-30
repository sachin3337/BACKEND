const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// ===================================== schema =================================
const orderSchema = new Schema({ // here creating the schema for customer order
    item: String,
    price: Number,
});

const customerSchema = new Schema({ // here schema for customer
    name: String,
    orders: [ // here orders are not included in customer schema 
        {
            type: Schema.Types.ObjectId, // but using this we can access orders data here 
            ref: "Order"
        },
    ],
});
// =========================== mongoose middleware =============================
// customerSchema.pre("findOneAndDelete", async()=>{ // it exicute before the delating customer
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => { // it find the findOneAndDelete fuction after the exicution of that it delete the thats connection also
    if (customer.orders.length) { // it access the customer orders details and performing openration using match quiry
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
});

// ============================================================================

const Order = mongoose.model("Order", orderSchema); // defining models for order
const Customer = mongoose.model("Customer", customerSchema);
//===============================================================================

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders"); // when we dont want object id we want total object then we use populate()
    console.log(result[0]);
};

// findCustomer();
//=====================================================================================

// creating new customer
const addCust = async () => {
    let newCust = new Customer({
        name: "sudarshan jagtap"
    });

    let newOrder = new Order({
        item: "burger",
        price: 250
    });
    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
}
// addCust();
//=======================================================================================
const delcust = async () => { // here deleting the customer using id
    let data = await Customer.findByIdAndDelete('68890c5c0b3b5e439c9dbae8');
    console.log(data);
};
delcust();
// =====================================================================================



// old customer
// const addOrder = async()=>{
//     let res = await Order.insertMany([ // inserting the data into Order
//         {item:"samosa", price:12},
//         {item :"chips",price:12},
//         {item:"ice cream", price:"55"}
//     ]);
//     console.log(res);
// };

// const AddCustomer = async () => {
// let cust1 = new Customer({ // inserting data into customer
//     name: "sachin ghusinge",
// });

//     let order1 = await Order.findOne({ item: "samosa" }); // find the daata into Order
//     let order2 = await Order.findOne({ item: "chips" });

//     cust1.orders.push(order1); // pusi+hing that data into cistomer data
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
//     let result = await Customer.find({});  // data are pushed put only id of that data is showed
//     console.log(result);
// }

// addOrder();
// AddCustomer();