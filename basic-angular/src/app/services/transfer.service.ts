import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransfer } from '../interfaces/Itransfer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private url = 'http://localhost:3000/transfers';

  constructor(private http: HttpClient) {}

  getAllTransfers(): Observable<ITransfer[]> {
    return this.http.get<ITransfer[]>(this.url);
  }

  addTransfer(transfer: any): Observable<ITransfer> {
    return this.http.post<ITransfer>(this.url, {
      ...transfer,
      date: new Date(),
    });
  }
}
