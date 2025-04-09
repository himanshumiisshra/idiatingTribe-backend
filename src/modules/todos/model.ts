// src/models/model.ts
import { model } from 'mongoose';
import { ITodo, TodoSchema } from './schema';

export const Todo = model<ITodo>('Todo', TodoSchema);
