"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckedHttpErrorResponse = exports.CheckedHttpError = exports.StateRecord = void 0;
const util_1 = require("./util");
class StateRecord {
    constructor(name, latitudeN, longitudeW) {
        this.name = name;
        this.latitudeN = latitudeN;
        this.longitudeW = longitudeW;
    }
    static of(name) {
        const record = (0, util_1.getUsStateRecord)(name);
        if (record === undefined)
            throw new Error("Invalid state");
        return record;
    }
}
exports.StateRecord = StateRecord;
class CheckedHttpError extends Error {
    constructor(message, httpCode) {
        super(message);
        this.httpCode = httpCode;
    }
    static of(message, httpCode) {
        return new CheckedHttpError(message, httpCode);
    }
}
exports.CheckedHttpError = CheckedHttpError;
class CheckedHttpErrorResponse {
    constructor(message, httpCode) {
        this.message = message;
        this.httpCode = httpCode;
    }
    static of(message, httpCode) {
        return new CheckedHttpErrorResponse(message, httpCode);
    }
}
exports.CheckedHttpErrorResponse = CheckedHttpErrorResponse;
