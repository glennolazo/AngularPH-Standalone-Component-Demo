import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailComponent,
  ],
  imports: [
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }
