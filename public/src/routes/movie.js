"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_1 = __importDefault(require("../controllers/movie"));
const router = express_1.default.Router();
router.post('/create', movie_1.default.createMovie);
router.get('/get/:movieId', movie_1.default.readMovie);
router.get('/get/', movie_1.default.readAll);
router.patch('/update/:movieId', movie_1.default.updateMovie);
router.delete('/delete/:movieId', movie_1.default.deleteMovie);
exports.default = router;
