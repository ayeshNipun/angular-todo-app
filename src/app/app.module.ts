import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ToDoItemPageComponent } from './to-do-item-page/to-do-item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    DashBoardComponent,
    ToDoItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
