const express = require ("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks); // to get all books
router.post("/", booksController.addBook); // to add a book
router.get("/:id", booksController.getById); // to get book by id
router.put("/:id", booksController.updateBook); // update book by id
router.delete("/:id", booksController.deleteBook)

module.exports = router;