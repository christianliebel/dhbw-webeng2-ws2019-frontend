import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseUrl = 'http://localhost:3000/todos';

  constructor(private readonly httpClient: HttpClient) {
  }

  public create(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.baseUrl, todo);
  }

  public get(todoId: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.baseUrl}/${todoId}`);
  }

  public getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  public update(todo: Todo): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${todo.id}`, todo);
  }

  public delete(todoId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${todoId}`);
  }
}
