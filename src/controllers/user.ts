import {NextFunction, Request, Response} from 'express'
import mongoose from 'mongoose'
import User from '../models/user'

const createUser = (req: Request, res:Response, next: NextFunction) => {
    const {username} = req.body
    const user=new User({
        _id: new mongoose.Types.ObjectId(),
        username
    })

    return user
        .save()
        .then((user)=> res.status(200).json({user}))
        .catch((error)=> res.status(500).json({error}))
}
const readUser = (req: Request, res:Response, next: NextFunction) => {
    const userId=req.params.userId

    return User
        .findById(userId)
        .then(user => user? res.status(200).json({user}):  res.status(500).json({message:'Not found'}))
        .catch((error)=> res.status(500).json({error}))

}
const readAll = (req: Request, res:Response, next: NextFunction) => {
    return User
        .find()
        .then(users => res.status(200).json({users}))
        .catch((error)=> res.status(500).json({error}))
}
const updateUser = async (req: Request, res:Response, next: NextFunction) => {
    const { username, newName } = req.body;
    try {
        const user = await User.findOne({username});
        if (user) {
            user.username = newName;
            const updatedUser = await user.save();
            return res.status(200).json({ user: updatedUser });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (e:any) {
        return res.status(500).json({ error: e.message });
    }
}
const deleteUser = (req: Request, res:Response, next: NextFunction) => {
    const username = req.body.username

    return User.findOneAndDelete({username})
        .then((user) => (user? res.status(201).json({message:'deleted'}):  res.status(404).json({message:'Not found'})))
        .catch((error)=> res.status(500).json({error}))
}

export default {createUser,readAll,readUser,deleteUser,updateUser}