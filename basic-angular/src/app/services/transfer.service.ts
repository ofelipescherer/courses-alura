import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private listTransfers: any[];

  constructor() {
    this.listTransfers = [];
  }

  get transfers() {
    return this.listTransfers;
  }

  addTransfer(transfer: any) {
    this.listTransfers.push({ ...transfer, date: new Date() });
  }
}
