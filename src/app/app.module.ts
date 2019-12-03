import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './test.directive';
import { ClickerDirective } from './clicker.directive';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    TestDirective,
    ClickerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
