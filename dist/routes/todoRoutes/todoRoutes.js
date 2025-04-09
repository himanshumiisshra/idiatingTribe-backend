"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRoute = void 0;
const todoController_1 = require("../../controller/todoController/todoController");
class todosRoute {
    constructor(server) {
        this.todo_controller = new todoController_1.todosController(server);
    }
    route(app) {
        // Route to get all todos
        app.get('/wp-json/wp/v2/todo', (req, res) => {
            this.todo_controller.getAllTodos(req, res);
        });
        // Route to get a single todo by id
        app.get('/todos/:id', (req, res) => {
            this.todo_controller.getTodoById(req, res);
        });
        // Route to create a new todo
        app.post('/todos', (req, res) => {
            this.todo_controller.createTodo(req, res);
        });
        // Route to update an existing todo by id
        app.put('/todos/:id', (req, res) => {
            this.todo_controller.updateTodo(req, res);
        });
        // Route to delete a todo by id
        app.delete('/todos/:id', (req, res) => {
            this.todo_controller.deleteTodo(req, res);
        });
    }
}
exports.todosRoute = todosRoute;
