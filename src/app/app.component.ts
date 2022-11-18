import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subHeaderName = 'Home';

  constructor() {}

  onSubHeaderNameChanged(subHeaderName: string) {
    this.subHeaderName = subHeaderName;
  }
 
}
