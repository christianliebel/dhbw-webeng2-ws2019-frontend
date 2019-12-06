import { InterceptorService } from './interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, Inject } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './test.directive';
import { ClickerDirective } from './clicker.directive';

export const APP_NAME = new InjectionToken<string>('app-name');

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: APP_NAME,
    useValue: 'My cool app'
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(APP_NAME) appName: string) {
    console.log(appName);
  }
}
