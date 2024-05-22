"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movie_1 = __importDefault(require("../models/movie"));
const createMovie = (req, res, next) => {
    const { title } = req.body;
    const movie = new movie_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        title
    });
    return movie
        .save()
        .then((movie) => res.status(200).json({ movie }))
        .catch((error) => res.status(500).json({ error }));
};
const readMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    return movie_1.default
        .findById(movieId)
        .then(movie => movie ? res.status(200).json({ movie }) : res.status(500).json({ meaaage: 'Not found' }))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return movie_1.default
        .find()
        .then(movies => res.status(200).json({ movies }))
        .catch((error) => res.status(500).json({ error }));
};
const updateMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    return movie_1.default.findById(movieId)
        .then((movie) => {
        if (movie) {
            movie.set(req.body);
            return movie
                .save()
                .then((movie) => res.status(201).json({ movie }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteMovie = (req, res, next) => {
    const movieId = req.params.movieId;
    return movie_1.default.findByIdAndDelete(movieId)
        .then((movie) => (movie ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createMovie, readAll, readMovie, deleteMovie, updateMovie };
