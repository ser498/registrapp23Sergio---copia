import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaneadoPage } from './scaneado.page';

const routes: Routes = [
  {
    path: '',
    component: ScaneadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScaneadoPageRoutingModule {}
