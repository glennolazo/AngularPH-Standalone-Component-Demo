import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() subHeaderName = new EventEmitter<string>();

  onPageChange(path: 'home' | 'todo') {
    const subHeaderName = path === 'home' ? 'Home' : 'My Todos';
    this.subHeaderName.emit(subHeaderName);
  }

}
