"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const database_1 = __importDefault(require("./config/database"));
(0, dotenv_1.config)();
(0, database_1.default)();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT);
app.listen(3000, () => {
    console.log(`🍃 Server is listening on port ${PORT} 🍃`);
});
