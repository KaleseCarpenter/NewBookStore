const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middlewares

app.use("/", (req, res, next) => {
    res.send("This is the start of the book store app")

});
mongoose.connect("mongodb+srv://admin:PieMouth354321@cluster0.vkbwm.mongodb.net/myBookStore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));
console.log("Hello World!!");


// PieMouth354321