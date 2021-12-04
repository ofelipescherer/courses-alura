import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './components/extract/extract.component';
import { NewTransferComponent } from './components/new-transfer/new-transfer.component';

const routes: Routes = [
  { path: '', redirectTo: 'extract', pathMatch: 'full' },
  { path: 'extract', component: ExtractComponent },
  { path: 'newTransfer', component: NewTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
