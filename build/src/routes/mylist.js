"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mylist_1 = __importDefault(require("../controllers/mylist"));
const router = express_1.default.Router();
router.post('/:userId/add/:movieId', mylist_1.default.add);
router.get('/get/:userId', mylist_1.default.mylist);
router.delete('/:userId/delete/:movieId', mylist_1.default.remove);
exports.default = router;
