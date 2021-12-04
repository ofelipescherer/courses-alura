import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private serviceTransfer: TransferService,
    private router: Router
  ) {}

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
          this.router.navigateByUrl('extract');
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
