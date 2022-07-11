const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router)// localhost:5000/books


mongoose.connect("mongodb+srv://admin:PieMouth354321@cluster0.vkbwm.mongodb.net/myBookStore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));
console.log("Hello World!!");


// PieMouth354321

// stopped at 16:46