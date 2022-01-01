import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { ListAnimalsResolver } from './list-animals/list-animals.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListAnimalsComponent,
    resolve: {
      animals: ListAnimalsResolver,
    },
  },
  {
    path: ':animalId',
    component: AnimalDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
