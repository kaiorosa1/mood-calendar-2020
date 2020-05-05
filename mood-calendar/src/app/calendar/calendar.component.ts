import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
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

  weeks = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
