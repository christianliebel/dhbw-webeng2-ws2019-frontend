import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public create(todo: Todo): Todo {
    return;
  }

  public get(todoId: number): Todo {
    return;
  }

  public getAll(): Todo[] {
    return [
      { name: 'Wäsche waschen', id: 1, done: false },
      { name: 'Straße fegen', id: 2, done: true },
    ];
  }

  public update(todo: Todo): void {}

  public delete(todoId: number): void {}
}
