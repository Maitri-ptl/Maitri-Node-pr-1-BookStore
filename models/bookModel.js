import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    describtion : {
        type : String,
    },
})

const Book = mongoose.model('Book',bookSchema)

export default Book;