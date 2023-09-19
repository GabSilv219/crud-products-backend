"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize('railway', 'postgres', 'M6G8wA3LjrvOMwOwxHM1', {
    host: 'containers-us-west-77.railway.app',
    dialect: 'postgres'
});
exports.default = sequelize;
