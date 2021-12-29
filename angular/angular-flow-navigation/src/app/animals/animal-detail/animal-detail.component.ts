import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animals';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
})
export class AnimalDetailComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalService.searchId(this.animalId);
  }

  like() {
    this.animalService.likeAnimal(this.animalId).subscribe((like) => {
      if (like) {
        this.animal$ = this.animalService.searchId(this.animalId);
      }
    });
  }

  delete() {
    this.animalService.deleteAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/']);
      },
      (error) => console.log(error)
    );
  }
}
