import User from '../models/userModel.js';
import { validationResult } from "express-validator";

export const registerUser =  async (req, res) => {
    try {

        const error = validationResult(req);
        if(error.array().length != 0){
            return res.json(error.array())
        }
        
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'Please Enter All Details...' })
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already Exist' })
        }

        if (password != confirmPassword) {
            return res.status(400).json({ message: 'Password does not match' })
        }

        const user = await User.create(req.body)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {

        const error = validationResult(req);
        if(error.array().length != 0){
            return res.json(error.array())
        }

        const { email, password } = req.body;
        const user = await User.findOne(email);

        if (!user) {
            return res.status(400).json({ message: 'User not Found!!' })
        }

        if (user.password != password) {
            return res.status(400).json({ message: 'Invalid Password!!' })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAllUser =  async (req, res) => {
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
        return res.status(200).json({ message: "Get All Users Details..", data, page, limit, totalData })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const gettUserById =  async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findById(id)
        return res.status(200).json({ success: true, message: 'Get User By Id', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const updateUser =  async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findByIdAndUpdate(id, req.body)
        return res.status(200).json({ success: true, message: 'User Data Updated..', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const deleteUser =  async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findByIdAndDelete(id)
        return res.status(200).json({ success: true, message: 'User Data Deleted', data })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}