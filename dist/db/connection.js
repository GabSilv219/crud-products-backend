"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('crud_products', 'gabsilv', 'unicorn', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
exports.default = sequelize;
