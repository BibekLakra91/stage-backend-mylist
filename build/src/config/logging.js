"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (namespace, messege, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${messege}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${messege}`);
    }
};
const warn = (namespace, messege, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${messege}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${messege}`);
    }
};
const debug = (namespace, messege, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${messege}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${messege}`);
    }
};
const error = (namespace, messege, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${messege}`, object);
    }
    else {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${messege}`);
    }
};
//exporting as a object
exports.default = {
    info,
    debug,
    error,
    warn
};
