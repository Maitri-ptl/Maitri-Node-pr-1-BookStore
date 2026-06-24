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

        const search = req.query.search || '';
        const page = req.query.page || 1;
        const limit = req.query.limit || 5;
        const skip = (page - 1) * limit;
        const totalData = await Student.countDocuments();
        const totalPage = Math.ceil(totalData / limit);

        const data = await Student.find({
            name: { $regex: search, $options: 'i' }
        })
            .skip(skip)
            .limit(limit)
            .sort({ name: 1 })  // 1 : Ascending sorting & -1 : Descending sorting
        return res.status(200).json({ message: "Get All Books Data..", data, page, limit, totalData })
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

