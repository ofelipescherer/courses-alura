import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animals';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {
  @Input() animals!: Animals;
  constructor() {}

  ngOnInit(): void {}
}
