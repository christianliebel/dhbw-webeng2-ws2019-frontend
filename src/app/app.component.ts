import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTodo = { name: 'Wäsche waschen', id: 5, done: false };

  constructor(elementRef: ElementRef) {
    console.log(elementRef);
  }

  public onDone(todo) {
    console.log(todo);
  }
}
