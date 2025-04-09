// src/models/service.ts
import { Todo } from './model';
import { ITodo } from './schema';

export class TodoService {
  async createTodo(data: Partial<ITodo>): Promise<ITodo> {
    const todo = new Todo(data);
    return await todo.save();
  }

  async getAllTodos(): Promise<ITodo[]> {
    return await Todo.find().exec();
  }

  async getTodoById(id: string): Promise<ITodo | null> {
    return await Todo.findById(id).exec();
  }

  async updateTodo(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
    return await Todo.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteTodo(id: string): Promise<ITodo | null> {
    return await Todo.findByIdAndDelete(id).exec();
  }
}
