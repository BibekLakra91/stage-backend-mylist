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
        .then(user => user? res.status(200).json({user}):  res.status(500).json({meaaage:'Not found'}))
        .catch((error)=> res.status(500).json({error}))

}
const readAll = (req: Request, res:Response, next: NextFunction) => {
    return User
        .find()
        .then(users => res.status(200).json({users}))
        .catch((error)=> res.status(500).json({error}))
}
const updateUser = (req: Request, res:Response, next: NextFunction) => {
    const userId=req.params.userId
    return User.findById(userId)
        .then((user) => {
            if(user){
                user.set(req.body)

                return user
                    .save()
                    .then((user)=> res.status(201).json({user}))
                    .catch((error)=> res.status(500).json({error}))
            }else{
                res.status(404).json({message : 'Not found'})
            }
        })
        .catch((error)=> res.status(500).json({error}))
}
const deleteUser = (req: Request, res:Response, next: NextFunction) => {
    const userId = req.params.userId

    return User.findByIdAndDelete(userId)
        .then((user) => (user? res.status(201).json({message:'deleted'}):  res.status(404).json({message:'Not found'})))
        .catch((error)=> res.status(500).json({error}))
}

export default {createUser,readAll,readUser,deleteUser,updateUser}