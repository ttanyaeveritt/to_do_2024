// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.css']
// })
// export class TodoListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// src/app/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from '../todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
