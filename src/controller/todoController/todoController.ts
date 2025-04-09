import { Request, Response } from "express";

import { TodoService } from "../../modules/todos/service";

export class todosController {
    private todo_service: TodoService

    constructor(server:any) {
        this.todo_service = new TodoService()
    }

    // Get all todos
  public async getAllTodos(req: Request, res: Response): Promise<void> {
    try {
      const todos = await this.todo_service.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Get a single todo by ID
  public async getTodoById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const todo = await this.todo_service.getTodoById(id);
      if (!todo) {
        res.status(404).json({ error: "Todo not found" });
        return;
      }
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Create a new todo
  public async createTodo(req: Request, res: Response): Promise<void> {
    try {
      const todoData = req.body;
      const newTodo = await this.todo_service.createTodo(todoData);
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Update an existing todo
  public async updateTodo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedTodo = await this.todo_service.updateTodo(id, updateData);
      if (!updatedTodo) {
        res.status(404).json({ error: "Todo not found" });
        return;
      }
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Delete a todo
  public async deleteTodo(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedTodo = await this.todo_service.deleteTodo(id);
      if (!deletedTodo) {
        res.status(404).json({ error: "Todo not found" });
        return;
      }
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}