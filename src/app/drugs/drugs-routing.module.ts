import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugsComponent } from './drugs.component';

const routes: Routes = [
  {
    path: '',
    component: DrugsComponent,
    data: {
      title: 'Drugs'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrugsRoutingModule {}