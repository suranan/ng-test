import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';


  constructor() {
    let a = this.increseValue(10,20)
    console.log('1231231231231231231231231    ', a);
  }

  increseValue(init: number, step: number) {
    return init + step;
  }


}
