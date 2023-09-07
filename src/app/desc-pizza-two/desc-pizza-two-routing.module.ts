import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescPizzaTwoPage } from './desc-pizza-two.page';

const routes: Routes = [
  {
    path: '',
    component: DescPizzaTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescPizzaTwoPageRoutingModule {}
