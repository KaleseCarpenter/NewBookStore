import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css"

// Delete Book
const Book = (props) => {
    const history = useNavigate();
    const { _id, name, author, description, price, image } = props.book;
    const deleteHandler = async() => {
      await axios
        .delete(`http://localhost:5000/books/${_id}`)
        .then((res) => res.data)
        .then(() => window.location ="/books"); // find a better way to refresh the page automatically when book is deleted
        // .then(() => history("/books"));
    };


  return (
    <div className="card">
        <img src={image} alt={name}  />
        <article> By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Rs {price}</h3>

        {/* This puts the id in the URL when clicking to update the book */}
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt: "auto"}}>
          Update
        </Button>
        <Button color="error" onClick={deleteHandler} sx={{mt: "auto"}}>
          Delete
        </Button>
    </div>
  );
};

export default Book;