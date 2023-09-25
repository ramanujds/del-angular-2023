import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';
  btnStatus = false;

  changeTitle(value:any='Shopping App') {
    this.title = value
    this.btnStatus = true;
  }

}
