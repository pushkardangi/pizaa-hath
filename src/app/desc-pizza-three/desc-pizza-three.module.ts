import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescPizzaThreePageRoutingModule } from './desc-pizza-three-routing.module';

import { DescPizzaThreePage } from './desc-pizza-three.page';

import { EternalModule } from '../eternal/eternal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescPizzaThreePageRoutingModule,
    EternalModule
  ],
  declarations: [DescPizzaThreePage]
})
export class DescPizzaThreePageModule {}
