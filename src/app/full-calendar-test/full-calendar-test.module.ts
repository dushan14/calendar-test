import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarTestComponent } from './full-calendar-test.component';
import {FullCalendarModule} from '@fullcalendar/angular';

@NgModule({
  declarations: [FullCalendarTestComponent],
  exports: [
    FullCalendarTestComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ]
})
export class FullCalendarTestModule { }
