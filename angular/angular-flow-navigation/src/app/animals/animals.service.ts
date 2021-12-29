import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../authenticator/token.service';
import { Animal, Animals } from './animals';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listAnimal(userName: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${userName}/photos`);
  }

  searchId(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }
}
