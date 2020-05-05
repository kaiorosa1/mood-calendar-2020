import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() mood : String;

  months = [
    {
      name: 'January'
    },
    {
      name: 'February'
    },
    {
      name: 'March'
    },
    {
      name: 'April'
    },
    {
      name: 'May'
    },
    {
      name: 'June'
    },
    {
      name: 'July'
    },
    {
      name: 'August'
    },
    {
      name: 'September'
    },
    {
      name: 'October'
    },
    {
      name: 'November'
    },
    {
      name: 'December'
    }
  ];

  weekdays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  btnClass = "button btn";

  weeks = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(e) {
    // saved class associated with sticker
    let addedClass = this.mood;
    // this.btnClass += ' ' + addedClass;
    e.target.classList.add(addedClass);
  }
}
