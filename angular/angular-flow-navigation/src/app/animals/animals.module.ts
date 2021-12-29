import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from '../components/card/card.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { MessageModule } from '../components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    AnimalDetailComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    MessageModule,
    ReactiveFormsModule,
  ],
})
export class AnimalsModule {}
