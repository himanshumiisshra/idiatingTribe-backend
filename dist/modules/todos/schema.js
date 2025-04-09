"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
// src/models/schema.ts
const mongoose_1 = require("mongoose");
exports.TodoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
}, {
    timestamps: true,
});
