"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const movie_1 = __importDefault(require("./routes/movie"));
const mylist_1 = __importDefault(require("./routes/mylist"));
const tvshow_1 = __importDefault(require("./routes/tvshow"));
const NAMESPACE = 'Server';
const router = (0, express_1.default)();
//connect to mongoDB
mongoose_1.default.connect(config_1.default.mongo.url)
    .then(() => console.log('MongoDB connected!!'))
    .catch(err => console.log(err));
//logging
router.use((req, res, next) => {
    logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging_1.default.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`);
    });
    next();
});
//parse the request
router.use(body_parser_1.default.urlencoded({ extended: false }));
router.use(body_parser_1.default.json());
//Routes
router.use('/user', user_1.default);
router.use('/movie', movie_1.default);
router.use('/mylist', mylist_1.default);
router.use('/tvshow', tvshow_1.default);
// error handling
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        messege: error.message
    });
    next();
});
const httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, () => logging_1.default.info(NAMESPACE, `Server running on ${config_1.default.server.hostname}:${config_1.default.server.port}`));
