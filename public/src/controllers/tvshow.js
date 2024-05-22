"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tvshow_1 = __importDefault(require("../models/tvshow"));
const createTvshow = (req, res, next) => {
    const { title } = req.body;
    const tvshow = new tvshow_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        title
    });
    return tvshow
        .save()
        .then((tvshow) => res.status(200).json({ tvshow }))
        .catch((error) => res.status(500).json({ error }));
};
const readTvshow = (req, res, next) => {
    const tvshowId = req.params.tvshowId;
    return tvshow_1.default
        .findById(tvshowId)
        .then(tvshow => tvshow ? res.status(200).json({ tvshow }) : res.status(500).json({ meaaage: 'Not found' }))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return tvshow_1.default
        .find()
        .then(tvshows => res.status(200).json({ tvshows }))
        .catch((error) => res.status(500).json({ error }));
};
const updateTvshow = (req, res, next) => {
    const tvshowId = req.params.tvshowId;
    return tvshow_1.default.findById(tvshowId)
        .then((tvshow) => {
        if (tvshow) {
            tvshow.set(req.body);
            return tvshow
                .save()
                .then((tvshow) => res.status(201).json({ tvshow }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteTvshow = (req, res, next) => {
    const tvshowId = req.params.tvshowId;
    return tvshow_1.default.findByIdAndDelete(tvshowId)
        .then((tvshow) => (tvshow ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createTvshow, readAll, readTvshow, deleteTvshow, updateTvshow };
