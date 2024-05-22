"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const MONGO_USERNAME= process.env.MONGO_USERNAME || 'user'
// const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'password'
// const MONGO_HOST = process.env.MONGO_URL || ''
const MONGO = {
    // host:MONGO_HOST,
    // username: MONGO_USERNAME,
    // password: MONGO_PASSWORD,
    // options: MONGO_OPTIONS,
    url: `${process.env.MONGO_URL}`
};
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || '0.0.0.0';
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
const config = {
    mongo: MONGO,
    server: SERVER
};
exports.default = config;
