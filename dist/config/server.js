"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
var bodyParser = require('body-parser');
const todoRoutes_1 = require("../routes/todoRoutes/todoRoutes");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        this.config();
        dotenv_1.default.config();
        this.mongoSetup();
        this.routes();
    }
    config() {
        this.app.use((0, cors_1.default)({ origin: "*" }));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(bodyParser.json({ limit: "60mb" }));
    }
    mongoSetup() {
        const mongoUri = process.env.MONGOURI;
        if (!mongoUri) {
            console.error("❌ MONGOURI is not defined in environment variables.");
            process.exit(1);
        }
        mongoose_1.default.connect(mongoUri)
            .then(() => {
            console.log("✅ DATABASE is CONNECTED! 🚀");
        })
            .catch((error) => {
            console.error("❌ DATABASE connection error:", error);
            process.exit(1);
        });
    }
    routes() {
        this.app.get("/", (_req, res) => {
            res.send("👋 Hello backend TODO App for idiatingTribe!");
        });
        const todoRoutes = new todoRoutes_1.todosRoute(this.server);
        todoRoutes.route(this.app);
    }
}
const appInstance = new App();
exports.app = appInstance.app;
exports.server = appInstance.server;
