import { AuthService } from './auth.service';
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
  public myTodo = { name: 'Wäsche waschen', done: false };
  public todos$: Observable<Todo[]>;

  constructor(elementRef: ElementRef, private todoService: TodoService,
    private authService: AuthService) {
    console.log(elementRef);
    console.log(todoService.getAll());
    this.todos$ = todoService.getAll();
  }

  public onDone(todo) {
    console.log(todo);
  }

  public login() {
    if (!this.authService.loggedIn) {
      this.authService.login();
    }
  }

  public create(todo: Todo) {
    this.todoService.create(todo).subscribe();
  }
}
