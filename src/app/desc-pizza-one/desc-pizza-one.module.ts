import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescPizzaOnePageRoutingModule } from './desc-pizza-one-routing.module';

import { DescPizzaOnePage } from './desc-pizza-one.page';

import { EternalModule } from '../eternal/eternal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescPizzaOnePageRoutingModule,
    EternalModule
  ],
  declarations: [DescPizzaOnePage]
})
export class DescPizzaOnePageModule {}
