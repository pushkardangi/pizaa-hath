import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescPizzaThreePage } from './desc-pizza-three.page';

const routes: Routes = [
  {
    path: '',
    component: DescPizzaThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescPizzaThreePageRoutingModule {}
