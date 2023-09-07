import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'desc-pizza-one',
    loadChildren: () => import('./desc-pizza-one/desc-pizza-one.module').then( m => m.DescPizzaOnePageModule)
  },
  {
    path: 'desc-pizza-two',
    loadChildren: () => import('./desc-pizza-two/desc-pizza-two.module').then( m => m.DescPizzaTwoPageModule)
  },
  {
    path: 'desc-pizza-three',
    loadChildren: () => import('./desc-pizza-three/desc-pizza-three.module').then( m => m.DescPizzaThreePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
