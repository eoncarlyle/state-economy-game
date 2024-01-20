"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_cron_1 = __importDefault(require("node-cron"));
const sequelize_1 = require("sequelize");
const persistentModel_1 = require("./persistentModel");
const service_1 = require("./service");
class Backend {
    constructor(port, dbPath) {
        this.app = (0, express_1.default)();
        this.port = port;
        const sequelize = new sequelize_1.Sequelize({
            dialect: "sqlite",
            storage: dbPath,
        });
        (0, persistentModel_1.initPersistentModels)(sequelize);
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.post("/gameId", service_1.postGameId);
        this.app.post("/guess", service_1.postGuessSubmission);
        this.app.get("/answer/:id", service_1.getPuzzleAnswer);
        this.app.get("/economy", service_1.getTargetStateEconomy);
        this.app.get("/health", service_1.getHealthCheck);
        node_cron_1.default.schedule("0 0 * * *", service_1.runDailyTasks, { scheduled: true, timezone: "America/Chicago" });
        this.app.use(service_1.handleErrors);
        this.app.use(service_1.handleUnhandledRoute);
    }
    launch() {
        this.app.listen(this.port, () => {
            console.log(`[server]: Server is running at http://localhost:${this.port}`);
        });
    }
    static launch() {
        const dbPath = process.argv.at(2);
        if (!dbPath)
            throw Error("No dbPath provided");
        console.log(`Assumed database path from cliargs: ${dbPath}`);
        console.log(`Assumed port number from cliargs: ${process.argv.at(3)}`);
        const port = Number(process.argv.at(3)) || 3001;
        new Backend(port, dbPath).launch();
    }
}
exports.Backend = Backend;
