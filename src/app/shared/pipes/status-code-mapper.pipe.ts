import { Pipe, PipeTransform } from '@angular/core';
import { TodoStatusCode } from 'src/app/core/enums/todo-status-code.enum';

@Pipe({
  name: 'statusCodeMapper'
})
export class StatusCodeMapperPipe implements PipeTransform {

  transform(value: TodoStatusCode, ...args: unknown[]): unknown {
    let retVal = '';
    switch (value) {
      case TodoStatusCode.InProgress:
        retVal = 'In Progress';
        break;
      case TodoStatusCode.Done:
        retVal = 'Done';
        break;
      default:
        retVal = 'No Started';
        break;
    }
    
    return retVal;
  }

}
