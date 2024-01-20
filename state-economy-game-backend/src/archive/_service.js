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
const crypto_1 = require("crypto");
const sequelize_1 = require("sequelize");
const model_1 = require("state-economy-game-util/model");
const util_1 = require("state-economy-game-util/util");
const model_2 = require("state-economy-game-util/model");
const constants_1 = require("state-economy-game-util/constants");
const persistentModel_1 = require("./persistentModel");
class Service {
    constructor(sequelize) {
        this.sequelize = sequelize;
        persistentModel_1.GameIdModel.init({
            id: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
            attempts: sequelize_1.DataTypes.INTEGER,
        }, {
            tableName: "GameIds",
            sequelize,
            timestamps: true,
        });
        persistentModel_1.TargetStateModel.init({
            id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
            targetStateName: sequelize_1.DataTypes.STRING,
        }, {
            tableName: "TargetStateName",
            sequelize,
            timestamps: true
        });
    }
    getTargetStateRecord() {
        return __awaiter(this, void 0, void 0, function* () {
            return model_1.StateRecord.of(yield this.getTargetStateName());
        });
    }
    postGameId(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUUID = (0, crypto_1.randomUUID)();
            const gameId = yield persistentModel_1.GameIdModel.create({
                id: newUUID,
                attempts: 0,
            });
            res.status(201).json(gameId);
        });
    }
    //TODO: determine which state-economy-game-util methods/data should no longer be there for security/cheating purposes
    getTargetStateEconomy(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = yield this.getTargetStateRecord();
            res.status(200).json(record.economy);
        });
    }
    postGuessSubmission(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
                distance: (0, util_1.getHaversineDistance)(model_1.StateRecord.of(guessStateName), yield this.getTargetStateRecord()),
                bearing: (0, util_1.getHaversineBearing)(model_1.StateRecord.of(guessStateName), yield this.getTargetStateRecord()),
            };
            //@ts-ignore
            yield persistentModel_1.GameIdModel.update({ attempts: gameId.attempts + 1 }, { where: { id: id } });
            res.status(201).json(responseBody);
        });
    }
    getPuzzleAnswer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const record = yield this.getTargetStateRecord();
            const responseBody = {
                id: id,
                targetStateName: record.name,
            };
            res.status(200).json(responseBody);
        });
    }
    getHealthCheck(_req, res) {
        return res.status(200).json({ status: "UP" });
    }
    handleErrors(err, req, res, next) {
        if (err instanceof model_2.CheckedHttpError) {
            res.status(err.httpCode).json({ message: err.message });
        }
        else {
            console.log(res);
            res.status(500).json({ message: "HTTP response code 500: server error" });
        }
    }
    handleUnhandledRoute(req, res) {
        res.status(404).json({ message: "HTTP response code 404: route not handled" });
    }
    getTargetStateName() {
        return __awaiter(this, void 0, void 0, function* () {
            const targetStateModel = yield persistentModel_1.TargetStateModel.findOne();
            if (!targetStateModel)
                throw new Error("Targetstate not found");
            return targetStateModel.targetStateName;
        });
    }
    runDailyTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const obsoleteDate = new Date();
            obsoleteDate.setDate(obsoleteDate.getDate() - 1);
            yield persistentModel_1.GameIdModel.destroy({
                where: {
                    createdAt: {
                        [sequelize_1.Op.lt]: obsoleteDate,
                    },
                },
            });
            yield persistentModel_1.TargetStateModel.destroy({ truncate: true });
            const newTargetState = (0, util_1.getUsStateRecords)().at(this.getRandomInt((0, util_1.getUsStateRecords)().length));
            yield persistentModel_1.TargetStateModel.create({
                id: 1,
                targetStateName: newTargetState === null || newTargetState === void 0 ? void 0 : newTargetState.name,
            });
        });
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
exports.default = Service;
