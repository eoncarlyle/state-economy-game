"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = require("crypto");
const cors_1 = __importDefault(require("cors"));
const model_1 = require("state-economy-game-util/model");
const persistentModel_1 = require("./persistentModel");
const util_1 = require("state-economy-game-util/util");
const model_2 = require("state-economy-game-util/model");
const constants_1 = require("state-economy-game-util/constants");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//TODO rename ID something more meaningful, but mainain this for now
//CREATE TABLE GameIds (id varchar(36) PRIMARY KEY, attempts tinyint, createdAt datetime, updatedAt datetime);
app.use(express_1.default.json());
//TODO add rotating targetStateRecord 
const getTargetStateName = () => "Oregon";
//TODO remove day + old timestamps
const getTargetStateRecord = () => model_1.StateRecord.of(getTargetStateName());
//TODO add rotating targetStateRecord 
const postGameId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUUID = (0, crypto_1.randomUUID)();
    const gameId = yield persistentModel_1.GameIdModel.create({
        id: newUUID,
        attempts: 0,
    });
    res.status(201).json(gameId);
});
//TODO: determine which state-economy-game-util methods/data should no longer be there for security/cheating purposes
const getTargetStateEconomy = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(getTargetStateRecord().economy);
});
const postGuessSubmission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, guessStateName } = req.body;
    if (!id || !guessStateName) {
        return next(model_2.CheckedHttpError.of('Request must contain both a game id and a guess state name', 400));
    }
    const gameId = yield persistentModel_1.GameIdModel.findOne({ where: { id: id } });
    if (!(0, util_1.isStateNameValid)(guessStateName) || !gameId) {
        return next(model_2.CheckedHttpError.of('Game id and a guess state name must both be valid', 422));
    }
    else if (gameId.attempts >= constants_1.MAX_GUESSES) {
        return next(model_2.CheckedHttpError.of('Too many request have been made for this game', 422));
    }
    const responseBody = {
        id: id,
        distance: (0, util_1.getHaversineDistance)(model_1.StateRecord.of(guessStateName), getTargetStateRecord()),
        bearing: (0, util_1.getHaversineBearing)(model_1.StateRecord.of(guessStateName), getTargetStateRecord()),
    };
    //@ts-ignore
    yield persistentModel_1.GameIdModel.update({ attempts: gameId.attempts + 1 }, { where: { id: id } });
    res.status(201).json(responseBody);
});
const getPuzzleAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        return next(model_2.CheckedHttpError.of('Request must contain a game id', 400));
    }
    const gameId = yield persistentModel_1.GameIdModel.findOne({ where: { id: id } });
    if (!gameId) {
        return next(model_2.CheckedHttpError.of('Game id must be valid', 422));
    }
    else if ((gameId === null || gameId === void 0 ? void 0 : gameId.attempts) < constants_1.MAX_GUESSES) {
        return next(model_2.CheckedHttpError.of(`${constants_1.MAX_GUESSES} guesses must be made before answer can be requested`, 422));
    }
    const responseBody = {
        id: id,
        targetStateName: getTargetStateRecord().name
    };
    res.status(200).json(responseBody);
});
const getHealthCheck = (_req, res) => {
    return res.status(200).json({ status: "UP" });
};
const handleErrors = (err, req, res, next) => {
    if (err instanceof model_2.CheckedHttpError) {
        res.status(err.httpCode).json({ message: err.message });
    }
    else {
        console.log(res);
        res.status(500).json({ message: 'HTTP response code 500: server error' });
    }
};
const handleUnhandledRoute = (req, res) => {
    res.status(404).json({ message: 'HTTP response code 404: route not handled' });
};
app.use((0, cors_1.default)());
app.post("/gameId", postGameId);
app.post("/guess", postGuessSubmission);
app.get("/answer/:id", getPuzzleAnswer);
app.get("/economy", getTargetStateEconomy);
app.get("/health", getHealthCheck);
app.use(handleErrors);
app.use(handleUnhandledRoute);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
