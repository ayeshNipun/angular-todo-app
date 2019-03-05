import { Injectable } from '@angular/core';
import { ToDoItem } from './to-do-item';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {
  private items: ToDoItem[];

  constructor() { 
    this.items = [];
  }

  public addTodoItem(todoItem: ToDoItem) {
    this.items.push(todoItem);
  }

  public getTodoItem(id: string) {
    return this.items.find(item => item.title == id);
  }

  public getAllTodoItems() {
    return this.items;
  }
}
