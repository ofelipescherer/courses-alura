import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAnimalComponent } from './new-animal/new-animal.component';

@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    AnimalDetailComponent,
    CommentsComponent,
    NewAnimalComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AnimalsModule {}
