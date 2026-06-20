import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controller/book.controller.js";


const bookRouter = Router();

//Create book
bookRouter.post('/',createBook)

// Get all books
bookRouter.get('/',getAllBooks);

// Get book by Id
bookRouter.get('/:id',getBookById);

// Update Book
bookRouter.patch('/:id',updateBook);

// Delete Book
bookRouter.delete('/:id',deleteBook)

export default bookRouter;