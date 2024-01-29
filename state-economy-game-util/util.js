"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHaversineBearing = exports.getHaversineDistance = exports.getDistanceLabel = exports.getHaversineFormat = exports.isStateNameValid = exports.getUsStateRecord = exports.getUsStateRecords = void 0;
const UsStates_1 = __importDefault(require("./UsStates"));
const haversine_1 = __importStar(require("./haversine"));
const getUsStateRecords = () => UsStates_1.default;
exports.getUsStateRecords = getUsStateRecords;
const getUsStateRecord = (stateName) => UsStates_1.default.find((stateRecord) => stateRecord.name === stateName);
exports.getUsStateRecord = getUsStateRecord;
const isStateNameValid = (stateName) => {
    return ((0, exports.getUsStateRecord)(stateName) && true);
};
exports.isStateNameValid = isStateNameValid;
const getHaversineFormat = (stateRecord) => {
    return { latitude: stateRecord.latitudeN, longitude: -1 * stateRecord.longitudeW };
};
exports.getHaversineFormat = getHaversineFormat;
const getDistanceLabel = (distance) => {
    return `${Math.round(distance)} mi`;
};
exports.getDistanceLabel = getDistanceLabel;
const getHaversineDistance = (startStateRecord, endStateRecord) => {
    return Math.round((0, haversine_1.default)((0, exports.getHaversineFormat)(startStateRecord), (0, exports.getHaversineFormat)(endStateRecord)));
};
exports.getHaversineDistance = getHaversineDistance;
const getHaversineBearing = (startStateRecord, endStateRecord) => {
    return Math.round((0, haversine_1.haversineBearing)((0, exports.getHaversineFormat)(startStateRecord), (0, exports.getHaversineFormat)(endStateRecord)));
};
exports.getHaversineBearing = getHaversineBearing;
