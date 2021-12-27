import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {
  private originalUrl = '';
  @Input() description = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.originalUrl = url;
    } else {
      this.originalUrl = `${API}/img/${url}`;
    }
  }

  get url(): string {
    return this.originalUrl;
  }

  constructor() {}

  ngOnInit(): void {}
}
