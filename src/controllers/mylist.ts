import {NextFunction, Request, Response} from 'express'
import User from '../models/user'
import Movie from '../models/movie'

const add =  (req: Request, res:Response, next: NextFunction) => {
    const userId=req.params.userId
    const movieId=req.params.movieId
    return User.findById(userId)
        .then((user) => {
            if(user){
                user.mylist.push(movieId)

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

const remove =  (req: Request, res:Response, next: NextFunction) => {
    const userId=req.params.userId
    const movieId=req.params.movieId
    return User.findById(userId)
        .then((user) => {
            if(user){
                const updatedList = user.mylist.filter(id => id !== movieId)
                user.mylist = updatedList

                return user
                    .save()
                    .then((user) => (user? res.status(201).json({message:'deleted'}):  res.status(404).json({message:'Not found'})))
                    .catch((error)=> res.status(500).json({error}))
            }else{
                res.status(404).json({message : 'Not found'})
            }
        })
        .catch((error)=> res.status(500).json({error}))
}


const mylist = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    User.findById(userId)
        .then((user) => {
            if (user) {
                const movieIds = user.mylist
                const moviePromises = movieIds.map(id => Movie.findById(id))

                Promise.all(moviePromises)
                    .then(movies => {
                        const movieTitles = movies
                            .filter(movie => movie) 
                            .map(movie => movie ? movie.title:res.status(404).json({ message: 'Not found' }))

                        // Calculate pagination
                        const startIndex = (page - 1) * limit
                        const endIndex = startIndex + limit
                        const paginatedTitles = movieTitles.slice(startIndex, endIndex)

                        res.status(200).json({ 
                            myList: paginatedTitles,
                            page,
                            limit,
                            total: movieTitles.length
                        })
                    })
                    .catch(error => {
                        res.status(500).json({ error })
                    })
            } else {
                res.status(404).json({ message: 'Not found' })
            }
        })
        .catch(error => {
            res.status(500).json({ error })
        })
}


export default {mylist,add,remove}