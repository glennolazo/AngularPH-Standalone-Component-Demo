import { TodoStatusCode } from "../enums/todo-status-code.enum";

export interface Todo {
    todoId: number;
    name: string;
    statusCode: TodoStatusCode;
  }