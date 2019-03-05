import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemPageComponent } from './to-do-item-page.component';

describe('ToDoItemPageComponent', () => {
  let component: ToDoItemPageComponent;
  let fixture: ComponentFixture<ToDoItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
