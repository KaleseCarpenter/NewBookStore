import React, {useEffect, useState} from "react";
import "./Book.css";
import axios from "axios"
import Book from "./Book";
import { Typography } from "@mui/material";
// import api server
const URL = "http://localhost:5000/books"; 

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data)
}

// get all books
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => { // only runs the browser once

        fetchHandler().then(data=>setBooks(data.books))
    }, []);
    console.log(books);

  return (
    <div>
        <Typography sx={{fontFamily:"fantasy", color:"#FDA4BA", marginTop: 8, marginBottom: 5}} variant="h1" display="flex" flexDirection="column" alignItems="center" >
          Pink Robin's Books
        </Typography>
        <ul>
            {/* Render all books by iterating over them*/}
            {books && books.map((book, i) => (
                <li key={i}>
                    <Book book={book}/> {/* Have to remove the Unordered list so the dots will go away */}
                </li>

            ))}
        </ul>
    
    </div>
  );
};

export default Books;