import { TodoService } from './todo.service';
import { Component, ElementRef } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myTodo = { name: 'Wäsche waschen', id: 5, done: false };
  public todos$: Observable<Todo[]>;

  constructor(elementRef: ElementRef, todoService: TodoService) {
    console.log(elementRef);
    console.log(todoService.getAll());
    this.todos$ = todoService.getAll();
  }

  public onDone(todo) {
    console.log(todo);
  }
}
