import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/interface/todo.interface';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'statusCode', 'action'];
  todos$!: Observable<Todo[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

  viewTodo(id: any) {
    this.router.navigate([id], { relativeTo: this.route });
    console.log('View Todo: ', id);
  }

  editTodo(id: any) {
    console.log('Edit Todo: ', id);
  }
}
