import {NextFunction, Request, Response} from 'express'
import mongoose from 'mongoose'
import Tvshow from '../models/tvshow'

const createTvshow = (req: Request, res:Response, next: NextFunction) => {
    const {title} = req.body
    const tvshow = new Tvshow({
        _id: new mongoose.Types.ObjectId(),
        title
    })

    return tvshow
        .save()
        .then((tvshow)=> res.status(200).json({tvshow}))
        .catch((error)=> res.status(500).json({error}))
}

const readTvshow = (req: Request, res:Response, next: NextFunction) => {
    const tvshowId=req.params.tvshowId

    return Tvshow
        .findById(tvshowId)
        .then(tvshow => tvshow? res.status(200).json({tvshow}):  res.status(500).json({message:'Not found'}))
        .catch((error)=> res.status(500).json({error}))

}

const readAll = (req: Request, res:Response, next: NextFunction) => {
    return Tvshow
        .find()
        .then(tvshows => res.status(200).json({tvshows}))
        .catch((error)=> res.status(500).json({error}))
}

const updateTvshow = async (req: Request, res: Response, next: NextFunction) => {
    const { tvshowId, title } = req.body;
    try {
        const tvshow = await Tvshow.findById(tvshowId);
        if (tvshow) {
            tvshow.title = title;
            const updatedTvshow = await tvshow.save();
            return res.status(200).json({ movie: updatedTvshow });
        } else {
            return res.status(404).json({ message: 'Movie not found' });
        }
    } catch (e:any) {
        return res.status(500).json({ error: e.message });
    }
};

const deleteTvshow = (req: Request, res:Response, next: NextFunction) => {
    const tvshowId = req.body.tvshowId

    return Tvshow.findByIdAndDelete(tvshowId)
        .then((tvshow) => (tvshow? res.status(201).json({message:'deleted'}):  res.status(404).json({message:'Not found'})))
        .catch((error)=> res.status(500).json({error}))
}

export default {createTvshow,readAll,readTvshow,deleteTvshow,updateTvshow}