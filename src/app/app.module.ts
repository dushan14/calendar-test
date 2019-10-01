import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FullCalendarTestModule} from './full-calendar-test/full-calendar-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
