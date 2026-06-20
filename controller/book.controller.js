import Book from '../models/bookModel.js';

export const createBook = async (req, res) => {
    try {
        const data = await Book.create(req.body)
        return res.status(200).json({ success: true, message: 'Book Created Successfully!!', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const getAllBooks =  async (req, res) => {
    try {
        const data = await Book.find({})
        return res.status(200).json({ success: true, message: 'Get Book Details...', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findById(id)
        return res.status(200).json({ success: true, message: 'Get Book By Id', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findByIdAndUpdate(id, req.body)
        return res.status(200).json({ success: true, message: 'User Data Updated..', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findByIdAndDelete(id)
        return res.status(200).json({ success: true, message: 'User Data Deleted', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

