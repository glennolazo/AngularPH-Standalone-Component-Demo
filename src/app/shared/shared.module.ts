import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialImportModule } from './material-import.module';
import { TodoStatusHighlighterDirective } from './directive/todo-status-highlighter.directive';
import { StatusCodeMapperPipe } from './pipes/status-code-mapper.pipe';

@NgModule({
  declarations: [TodoStatusHighlighterDirective, StatusCodeMapperPipe],
  exports: [
    CommonModule,
    MaterialImportModule,
    TodoStatusHighlighterDirective,
    StatusCodeMapperPipe,
  ],
  imports: [CommonModule, MaterialImportModule],
})
export class SharedModule {}
