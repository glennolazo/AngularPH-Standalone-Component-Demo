import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Todo } from 'src/app/core/interface/todo.interface';
import { TodoService } from 'src/app/core/services/todo.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo$!: Observable<Todo | undefined>;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todo$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(todoId => {
        return this.todoService.getTodoById(+todoId!);
      })
    )
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
