import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input()
  public todoItem: ToDoItem;

  constructor() { }

  ngOnInit() {
  }

}
