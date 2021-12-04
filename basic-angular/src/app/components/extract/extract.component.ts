import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  transfers: any;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.transfers = this.transferService.transfers;
  }
}
