"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tvshow_1 = __importDefault(require("../controllers/tvshow"));
const router = express_1.default.Router();
router.post('/create', tvshow_1.default.createTvshow);
router.get('/get/:tvshowid', tvshow_1.default.readTvshow);
router.get('/get/', tvshow_1.default.readAll);
router.patch('/update/:tvshowid', tvshow_1.default.updateTvshow);
router.delete('/delete/:tvshowid', tvshow_1.default.deleteTvshow);
exports.default = router;
