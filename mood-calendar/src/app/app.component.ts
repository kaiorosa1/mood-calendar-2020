import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mood-calendar';
  moodClicked = 'normal';

  onClick(mood) {
    this.moodClicked = mood;
  }


}
