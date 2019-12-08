import { Component } from '@angular/core';

@Component({
  selector: 'fun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  login() {
    alert('asd')
  }

}
