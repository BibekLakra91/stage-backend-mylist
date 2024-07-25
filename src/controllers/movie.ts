import {NextFunction, Request, Response} from 'express'
import mongoose from 'mongoose'
import Movie from '../models/movie'

const createMovie = (req: Request, res:Response, next: NextFunction) => {
    const {title} = req.body
    const movie=new Movie({
        _id: new mongoose.Types.ObjectId(),
        title
    })

    return movie
        .save()
        .then((movie)=> res.status(200).json({movie}))
        .catch((error)=> res.status(500).json({error}))
}
const readMovie = (req: Request, res:Response, next: NextFunction) => {
    const movieId=req.params.movieId

    return Movie
        .findById(movieId)
        .then(movie => movie? res.status(200).json({movie}):  res.status(500).json({message:'Not found'}))
        .catch((error)=> res.status(500).json({error}))

}

const readAll = (req: Request, res:Response, next: NextFunction) => {
    return Movie
        .find()
        .then(movies => res.status(200).json({movies}))
        .catch((error)=> res.status(500).json({error}))
}

const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
    const { movieId, title } = req.body;

    try {
        const movie = await Movie.findById(movieId);

        if (movie) {
            movie.title = title;
            const updatedMovie = await movie.save();
            return res.status(200).json({ movie: updatedMovie });
        } else {
            return res.status(404).json({ message: 'Movie not found' });
        }
    } catch (e:any) {
        return res.status(500).json({ error: e.message });
    }
};


const deleteMovie = (req: Request, res:Response, next: NextFunction) => {
    const movieId = req.body.movieId

    return Movie.findByIdAndDelete(movieId)
        .then((movie) => (movie? res.status(201).json({message:'deleted'}):  res.status(404).json({message:'Not found'})))
        .catch((error)=> res.status(500).json({error}))
}

export default {createMovie,readAll,readMovie,deleteMovie,updateMovie}