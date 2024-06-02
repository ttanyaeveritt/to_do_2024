// src/app/todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://localhost:5001/api/todoitems';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(`${this.apiUrl}/${id}`);
  }

  createTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, todo);
  }

  updateTodo(todo: TodoItem): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {

//   constructor() { }
// }
