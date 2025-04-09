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
exports.todosController = void 0;
const service_1 = require("../../modules/todos/service");
class todosController {
    constructor(server) {
        this.todo_service = new service_1.TodoService();
    }
    // Get all todos
    getAllTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield this.todo_service.getAllTodos();
                res.status(200).json(todos);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    // Get a single todo by ID
    getTodoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const todo = yield this.todo_service.getTodoById(id);
                if (!todo) {
                    res.status(404).json({ error: "Todo not found" });
                    return;
                }
                res.status(200).json(todo);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    // Create a new todo
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoData = req.body;
                const newTodo = yield this.todo_service.createTodo(todoData);
                res.status(201).json(newTodo);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    // Update an existing todo
    updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updateData = req.body;
                const updatedTodo = yield this.todo_service.updateTodo(id, updateData);
                if (!updatedTodo) {
                    res.status(404).json({ error: "Todo not found" });
                    return;
                }
                res.status(200).json(updatedTodo);
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
    // Delete a todo
    deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deletedTodo = yield this.todo_service.deleteTodo(id);
                if (!deletedTodo) {
                    res.status(404).json({ error: "Todo not found" });
                    return;
                }
                res.status(200).json({ message: "Todo deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
}
exports.todosController = todosController;
