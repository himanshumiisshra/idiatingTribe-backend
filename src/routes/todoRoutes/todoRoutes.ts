import { Application, Request, Response } from "express";
import { todosController } from "../../controller/todoController/todoController";

export class todosRoute {
    private todo_controller: todosController;

    constructor(server: any) {
        this.todo_controller = new todosController(server);
    }

    public route(app: Application): void {
        // Route to get all todos
        app.get('/wp-json/wp/v2/todo', (req: Request, res: Response) => {
            this.todo_controller.getAllTodos(req, res);
        });

        // Route to get a single todo by id
        app.get('/todos/:id', (req: Request, res: Response) => {
            this.todo_controller.getTodoById(req, res);
        });

        // Route to create a new todo
        app.post('/todos', (req: Request, res: Response) => {
            this.todo_controller.createTodo(req, res);
        });

        // Route to update an existing todo by id
        app.put('/todos/:id', (req: Request, res: Response) => {
            this.todo_controller.updateTodo(req, res);
        });

        // Route to delete a todo by id
        app.delete('/todos/:id', (req: Request, res: Response) => {
            this.todo_controller.deleteTodo(req, res);
        });
    }
}
