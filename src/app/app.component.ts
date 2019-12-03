import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'todoApp';
  public value = 'Hallo';
  public color = 'hotpink';
  public pi = 3.141592;

  public onClick({x, y}: MouseEvent) {
    alert(`X: ${x}, Y: ${y}`);
  }

  public onMouseMove({x, y}: MouseEvent) {
    console.log(`X: ${x}, Y: ${y}`);
  }
}
