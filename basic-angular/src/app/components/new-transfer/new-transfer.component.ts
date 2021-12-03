import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  value: number | undefined;
  account: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  transfer(): void {
    console.log('Value: ', this.value);
    console.log('Account: ', this.account);
  }
}
