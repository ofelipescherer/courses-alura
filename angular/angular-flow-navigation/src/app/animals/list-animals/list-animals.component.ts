import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.userService.returnUser().subscribe((user) => {
      const userName = user.name ?? ''; //Using this property javascript, we garant that this const will be string
      this.animalsService.listAnimal(userName).subscribe((animals) => {
        this.animals = animals;
      });
    });
  }
}
