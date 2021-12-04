import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent implements OnInit {
  @Output() onTransfer: any = new EventEmitter();

  value: number | undefined;
  account: number | undefined;

  constructor(private serviceTransfer: TransferService) {}

  ngOnInit(): void {}

  transfer(): void {
    this.serviceTransfer
      .addTransfer({
        date: new Date(),
        value: this.value,
        account: this.account,
      })
      .subscribe(
        () => {
          this.value = 0;
          this.account = 0;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
