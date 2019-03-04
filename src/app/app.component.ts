import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo Application';
  items: {description: string; done: boolean}[];

  newDescription;

  constructor() {
    this.items = [];
  }

  addItem() {
    this.items.push({description: this.newDescription, done: false});
    this.newDescription = '';
  }
}
