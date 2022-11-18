import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
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
