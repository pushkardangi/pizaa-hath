import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescPizzaOnePage } from './desc-pizza-one.page';

const routes: Routes = [
  {
    path: '',
    component: DescPizzaOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescPizzaOnePageRoutingModule {}
