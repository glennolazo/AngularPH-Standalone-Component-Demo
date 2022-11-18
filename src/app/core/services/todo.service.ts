import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TodoStatusCode } from '../enums/todo-status-code.enum';
import { Todo } from '../interface/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: Todo[] = [
    { todoId: 1, name: 'Eat', statusCode: TodoStatusCode.NotStarted },
    { todoId: 2, name: 'Sleep', statusCode: TodoStatusCode.InProgress },
    { todoId: 3, name: 'Code', statusCode: TodoStatusCode.Done },
  ];
  private todosSubject = new BehaviorSubject<Todo[]>(this._todos);

  constructor() {}

  getTodos() {
    return this.todosSubject.asObservable();
  }

  getTodoById(todoId: number) {
    return this.getTodos().pipe(
      map((todos: Todo[]) => todos.find((item: Todo) => item.todoId === todoId))
    );
  }
}
