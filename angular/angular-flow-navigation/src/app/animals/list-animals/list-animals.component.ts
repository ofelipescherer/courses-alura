import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000';
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
