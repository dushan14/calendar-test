import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {FullCalendarComponent} from '@fullcalendar/angular';
import {Calendar} from '@fullcalendar/core';
import {EventApi} from '@fullcalendar/core/api/EventApi';
import {DayGridView} from '@fullcalendar/daygrid/DayGridView';


@Component({
  selector: 'app-full-calendar-test',
  templateUrl: './full-calendar-test.component.html',
  styleUrls: ['./full-calendar-test.component.scss']
})
export class FullCalendarTestComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];
  events: any[] = [
    {title: 'event 1', date: '2019-10-01', desc: 'lol event 1'},
    {title: 'event 2', date: '2019-10-02', desc: 'lol event 2'}
  ];

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarApi: Calendar;

  addingHtml = `
              <div class="added-part">
                  <div></div>
              </div>
              `;

  // important!

  constructor() {
  }

  ngOnInit() {
    this.calendarApi = this.calendarComponent.getApi();
  }

  handleDateClick($event: any) {
    console.log('clicked' + $event.dateStr);
  }

  eventRender($event: any) {
    const el: HTMLElement = $event.el;
    const event: EventApi = $event.event;
    const view: DayGridView = $event.view;
    console.log(el);
    console.log(event);
    console.log(view);

    const node = document.createElement('div');
    node.innerHTML = this.addingHtml;

    el.innerHTML = '';
    el.append(node);

    el.children[0].children[0].children[0].innerHTML = event.title;

    el.addEventListener('click', () => {
      console.log('clicked');
      this.work();
    });
  }

  work() {
    alert('clicked');
  }
}
