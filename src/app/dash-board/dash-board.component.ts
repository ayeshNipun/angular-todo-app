import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  items: ToDoItem[];

  newItemTitle;
  newItemDescription;

  constructor() {
    this.items = [];
  }

  ngOnInit() {}

  addItem() {
    this.items.push({ title: this.newItemTitle, description: this.newItemDescription, done: false });
    this.newItemDescription = '';
    this.newItemTitle = '';
  }
}
