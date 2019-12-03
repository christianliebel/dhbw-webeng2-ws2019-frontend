import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTodo = { name: 'Wäsche waschen', id: 5, done: false };

  public onDone(todo) {
    console.log(todo);
  }
}
