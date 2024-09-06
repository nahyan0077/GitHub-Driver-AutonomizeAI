"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const database_1 = __importDefault(require("./config/database"));
const userRoutes_1 = require("./routes/userRoutes");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)();
(0, database_1.default)();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT);
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use('/user', (0, userRoutes_1.userRoutes)());
app.get('/', (req, res) => {
    console.log("sdf");
    res.json({ he: "hee" });
});
app.listen(3000, () => {
    console.log(`🍃 Server is listening on port ${PORT} 🍃`);
});
