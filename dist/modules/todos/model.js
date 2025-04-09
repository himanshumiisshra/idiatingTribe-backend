"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
// src/models/model.ts
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
exports.Todo = (0, mongoose_1.model)('Todo', schema_1.TodoSchema);
