import { TodoService } from './todo.service';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTodo = { name: 'Wäsche waschen', id: 5, done: false };

  constructor(elementRef: ElementRef, todoService: TodoService) {
    console.log(elementRef);
    console.log(todoService.getAll());
  }

  public onDone(todo) {
    console.log(todo);
  }
}
