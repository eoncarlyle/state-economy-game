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
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDailyTasks = exports.getTargetStateName = exports.handleUnhandledRoute = exports.handleErrors = exports.getHealthCheck = exports.getPuzzleAnswer = exports.postGuessSubmission = exports.getTargetStateEconomy = exports.postGameId = exports.getTargetStateRecord = void 0;
const crypto_1 = require("crypto");
const sequelize_1 = require("sequelize");
const model_1 = require("state-economy-game-util/model");
const persistentModel_1 = require("./persistentModel");
const util_1 = require("state-economy-game-util/util");
const model_2 = require("state-economy-game-util/model");
const constants_1 = require("state-economy-game-util/constants");
const getTargetStateRecord = () => __awaiter(void 0, void 0, void 0, function* () { return model_1.StateRecord.of(yield (0, exports.getTargetStateName)()); });
exports.getTargetStateRecord = getTargetStateRecord;
const postGameId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUUID = (0, crypto_1.randomUUID)();
    const gameId = yield persistentModel_1.GameIdModel.create({
        id: newUUID,
        attempts: 0,
    });
    res.status(201).json(gameId);
});
exports.postGameId = postGameId;
//TODO: determine which state-economy-game-util methods/data should no longer be there for security/cheating purposes
const getTargetStateEconomy = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const record = yield (0, exports.getTargetStateRecord)();
    res.status(200).json(record.economy);
});
exports.getTargetStateEconomy = getTargetStateEconomy;
const postGuessSubmission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, guessStateName } = req.body;
    if (!id || !guessStateName) {
        return next(model_2.CheckedHttpError.of("Request must contain both a game id and a guess state name", 400));
    }
    const gameId = yield persistentModel_1.GameIdModel.findOne({ where: { id: id } });
    if (!(0, util_1.isStateNameValid)(guessStateName) || !gameId) {
        return next(model_2.CheckedHttpError.of("Game id and a guess state name must both be valid", 422));
    }
    else if (gameId.attempts >= constants_1.MAX_GUESSES) {
        return next(model_2.CheckedHttpError.of("Too many request have been made for this game", 422));
    }
    const responseBody = {
        id: id,
        distance: (0, util_1.getHaversineDistance)(model_1.StateRecord.of(guessStateName), yield (0, exports.getTargetStateRecord)()),
        bearing: (0, util_1.getHaversineBearing)(model_1.StateRecord.of(guessStateName), yield (0, exports.getTargetStateRecord)()),
    };
    //@ts-ignore
    yield persistentModel_1.GameIdModel.update({ attempts: gameId.attempts + 1 }, { where: { id: id } });
    res.status(201).json(responseBody);
});
exports.postGuessSubmission = postGuessSubmission;
const getPuzzleAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        return next(model_2.CheckedHttpError.of("Request must contain a game id", 400));
    }
    const gameId = yield persistentModel_1.GameIdModel.findOne({ where: { id: id } });
    if (!gameId) {
        return next(model_2.CheckedHttpError.of("Game id must be valid", 422));
    }
    else if ((gameId === null || gameId === void 0 ? void 0 : gameId.attempts) < constants_1.MAX_GUESSES) {
        return next(model_2.CheckedHttpError.of(`${constants_1.MAX_GUESSES} guesses must be made before answer can be requested`, 422));
    }
    const record = yield (0, exports.getTargetStateRecord)();
    const responseBody = {
        id: id,
        targetStateName: record.name,
    };
    res.status(200).json(responseBody);
});
exports.getPuzzleAnswer = getPuzzleAnswer;
const getHealthCheck = (_req, res) => {
    return res.status(200).json({ status: "UP" });
};
exports.getHealthCheck = getHealthCheck;
const handleErrors = (err, req, res, next) => {
    if (err instanceof model_2.CheckedHttpError) {
        res.status(err.httpCode).json({ message: err.message });
    }
    else {
        res.status(500).json({ message: "HTTP response code 500: server error" });
    }
};
exports.handleErrors = handleErrors;
const handleUnhandledRoute = (req, res) => {
    res.status(404).json({ message: "HTTP response code 404: route not handled" });
};
exports.handleUnhandledRoute = handleUnhandledRoute;
const getTargetStateName = () => __awaiter(void 0, void 0, void 0, function* () {
    const targetStateModel = yield persistentModel_1.TargetStateModel.findOne();
    if (!targetStateModel)
        throw new Error("TargetState not found");
    return targetStateModel.targetStateName;
});
exports.getTargetStateName = getTargetStateName;
const runDailyTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const obsoleteDate = new Date();
    obsoleteDate.setDate(obsoleteDate.getDate() - 1);
    const obsoleteIdCount = yield persistentModel_1.GameIdModel.destroy({
        where: {
            createdAt: {
                [sequelize_1.Op.lt]: obsoleteDate,
            },
        },
    });
    console.log(`Obsolete GameIds removed: ${obsoleteIdCount}}`);
    yield persistentModel_1.TargetStateModel.destroy({ truncate: true });
    const newTargetState = (0, util_1.getUsStateRecords)().at(getRandomInt((0, util_1.getUsStateRecords)().length));
    if (!newTargetState)
        return new Error("Failure to create new target state");
    yield persistentModel_1.TargetStateModel.create({
        id: 1,
        targetStateName: newTargetState === null || newTargetState === void 0 ? void 0 : newTargetState.name,
    });
    console.log(`New target state: ${newTargetState === null || newTargetState === void 0 ? void 0 : newTargetState.name}`);
});
exports.runDailyTasks = runDailyTasks;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
