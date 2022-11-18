import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialImportModule } from '../shared/material-import.module';

@Component({
  standalone: true,
  imports: [MaterialImportModule, RouterModule],
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
