import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from 'src/app/authenticator/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

@Injectable({
  providedIn: 'root',
})
export class ListAnimalsResolver implements Resolve<Animals> {
  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.listAnimal(userName);
      }),
      take(1)
    );
  }
}
