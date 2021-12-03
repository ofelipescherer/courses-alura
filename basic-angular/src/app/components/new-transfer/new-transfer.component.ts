import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  @Output() onTransfer: any = new EventEmitter();

  value: number | undefined;
  account: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  transfer(): void {
    this.onTransfer.emit({ value: this.value, account: this.account });
  }
}
