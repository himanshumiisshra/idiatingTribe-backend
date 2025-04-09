"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8888;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// A simple GET route
app.get('/', (req, res) => {
    res.send('Hello, backend for todo Task for idiatingTribe!');
});
// A POST route for example
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully!',
        data: data,
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
