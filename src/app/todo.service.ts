import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public create(todo: Todo): Observable<Todo> {
    return;
  }

  public get(todoId: number): Observable<Todo> {
    return;
  }

  public getAll(): Observable<Todo[]> {
    return of([
      { name: 'Wäsche waschen', id: 1, done: false },
      { name: 'Straße fegen', id: 2, done: true },
    ]);
  }

  public update(todo: Todo): Observable<void> {
    return of();
  }

  public delete(todoId: number): Observable<void> {
    return of();
  }
}
