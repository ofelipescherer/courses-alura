import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/authenticator/user/user.service';
import { Animals } from '../animals';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //this is not a good practice
    // this.userService.returnUser().subscribe((user) => {
    //   const userName = user.name ?? ''; //Using this property javascript, we garant that this const will be string
    //   this.animalsService.listAnimal(userName).subscribe((animals) => {
    //     this.animals = animals;
    //   });
    // });

    //this is a good practice
    //  this.animals$ = this.userService.returnUser().pipe(
    //    switchMap((user) => {
    //      const userName = user.name ?? '';
    //      return this.animalsService.listAnimal(userName);
    //    })
    //  );

    this.activatedRoute.params.subscribe((param) => {
      this.animals = this.activatedRoute.snapshot.data['animals'];
    });
  }
}
