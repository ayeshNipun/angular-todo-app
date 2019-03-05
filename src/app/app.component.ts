import { Component } from '@angular/core';
import { ToDoItem } from './to-do-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo Application';
  items: ToDoItem[];

  newItemTitle;
  newItemDescription;

  constructor() {
    this.items = [];
  }

  addItem() {
    this.items.push({title: this.newItemTitle, description: this.newItemDescription, done: false});
    this.newItemDescription = '';
    this.newItemTitle = '';
  }
}
