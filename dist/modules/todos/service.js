"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
// src/models/service.ts
const model_1 = require("./model");
class TodoService {
    createTodo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = new model_1.Todo(data);
            return yield todo.save();
        });
    }
    getAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Todo.find().exec();
        });
    }
    getTodoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Todo.findById(id).exec();
        });
    }
    updateTodo(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Todo.findByIdAndUpdate(id, data, { new: true }).exec();
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield model_1.Todo.findByIdAndDelete(id).exec();
        });
    }
}
exports.TodoService = TodoService;
