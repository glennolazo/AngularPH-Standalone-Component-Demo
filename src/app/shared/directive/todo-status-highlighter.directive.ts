import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TodoStatusCode } from 'src/app/core/enums/todo-status-code.enum';

@Directive({
  selector: '[todoStatusHighlighter]',
})
export class TodoStatusHighlighterDirective implements OnInit {
  @Input() statusCode: TodoStatusCode = TodoStatusCode.NotStarted;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.changeHighlightColor(this.statusCode)
  }

  changeHighlightColor(code: TodoStatusCode) {
    switch (code) {
      case TodoStatusCode.InProgress:
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'orange');
        break;
      case TodoStatusCode.Done:
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
        break;
      default:
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'gray');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
        break;
    }
  }
}
