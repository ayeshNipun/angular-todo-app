import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-item-page',
  templateUrl: './to-do-item-page.component.html',
  styleUrls: ['./to-do-item-page.component.scss']
})
export class ToDoItemPageComponent implements OnInit {
  title;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.title = param.get('id');
    });
  }

}
