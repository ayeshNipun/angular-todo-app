import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo Application';
  items: {title: string; description: string; done: boolean}[];

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
