import {NextFunction, Request, Response} from 'express'
import User from '../models/user'
import Movie from '../models/movie'
import Tvshow from '../models/tvshow'
import mongoose from 'mongoose'

// add item to user's mylist
const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        const itemId = req.params.itemId;

        // Convert itemId to ObjectId
        const itemObjectId = new mongoose.Types.ObjectId(itemId);

        // Find the user by userId
        const user = await User.findById(userId);
        if (user) {
            // Check if movieId is already in the list
            if (!user.mylist.includes(itemObjectId)) {
                // Add movieObjectId to mylist
                user.mylist.push(itemObjectId);

                // Save the updated user
                await user.save();

                // Send response
                res.status(201).json({ message: 'Movie added to list successfully', user });
            } else {
                res.status(400).json({ message: 'Movie is already in the list' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error adding movie to list:', error);
        res.status(500).json({ error });
    }
};

// Remove item from user's mylist
const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        const itemId = req.params.itemId;

        // Convert movieId to ObjectId
        const itemObjectId = new mongoose.Types.ObjectId(itemId);

        // Find the user by userId
        const user = await User.findById(userId);
        if (user) {
            // Check if movieId is in the list
            if (user.mylist.includes(itemObjectId)) {
                // Remove movieObjectId from mylist
                user.mylist = user.mylist.filter(id => !id.equals(itemObjectId));

                // Save the updated user
                await user.save();

                // Send response
                res.status(200).json({ message: 'Movie removed from list successfully', user });
            } else {
                res.status(400).json({ message: 'Movie not found in the list' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error removing movie from list:', error);
        res.status(500).json({ error });
    }
};

const mylist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if (user) {
            const itemIds = user.mylist;
            const movies = await Movie.find({ _id: { $in: itemIds } });
            const tvshows = await Tvshow.find({ _id: { $in: itemIds } });

            const movieTitles = movies.map(movie => movie.title);
            const tvshowTitles = tvshows.map(tvshow => tvshow.title);

            res.json({ movieTitles, tvshowTitles});
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Internal Server Error');
    }
};


export default {mylist,add,remove}