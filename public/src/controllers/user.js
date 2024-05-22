"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res, next) => {
    const { username } = req.body;
    const user = new user_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        username
    });
    return user
        .save()
        .then((user) => res.status(200).json({ user }))
        .catch((error) => res.status(500).json({ error }));
};
const readUser = (req, res, next) => {
    const userId = req.params.userId;
    return user_1.default
        .findById(userId)
        .then(user => user ? res.status(200).json({ user }) : res.status(500).json({ meaaage: 'Not found' }))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return user_1.default
        .find()
        .then(users => res.status(200).json({ users }))
        .catch((error) => res.status(500).json({ error }));
};
const updateUser = (req, res, next) => {
    const userId = req.params.userId;
    return user_1.default.findById(userId)
        .then((user) => {
        if (user) {
            user.set(req.body);
            return user
                .save()
                .then((user) => res.status(201).json({ user }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    return user_1.default.findByIdAndDelete(userId)
        .then((user) => (user ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createUser, readAll, readUser, deleteUser, updateUser };
