import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  items: ToDoItem[];

  newItemTitle;
  newItemDescription;

  constructor(private toDoItemService: ToDoItemService) {
  }

  ngOnInit() {
    this.items = [];
    this.items.push(...this.toDoItemService.getAllTodoItems());
  }

  addItem() {
    const item: ToDoItem = { title: this.newItemTitle, description: this.newItemDescription, done: false };
    this.items.push(item);
    this.toDoItemService.addTodoItem(item);
    this.newItemDescription = '';
    this.newItemTitle = '';
  }
}
