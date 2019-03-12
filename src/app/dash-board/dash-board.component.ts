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

  todoItemForm = new ToDoItem('', '', false);

  constructor(private toDoItemService: ToDoItemService) {}

  ngOnInit() {
    this.items = [];
    this.items.push(...this.toDoItemService.getAllTodoItems());
  }

  onSubmit($todoItemForm) {
    this.items.push($todoItemForm.value);
    this.toDoItemService.addTodoItem($todoItemForm.value);
    $todoItemForm.resetForm();
  }
}
