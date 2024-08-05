import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

const db = mongoose.connection;

db.on('open', () => {
    console.log("successfully connected to db");
})
db.on('error', () => {
    console.log("error in connecting to db");
})

export default db;
