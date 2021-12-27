import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../authenticator/token.service';
import { Animals } from './animals';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listAnimal(userName: string): Observable<Animals> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animals>(`${API}/${userName}/photos`, { headers });
  }
}
