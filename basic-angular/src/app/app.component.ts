import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'basic-angular';
  transfer: any = {};

  transferValues($event: any) {
    this.transfer = $event;
  }
}
