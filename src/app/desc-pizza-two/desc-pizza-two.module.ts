import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescPizzaTwoPageRoutingModule } from './desc-pizza-two-routing.module';

import { DescPizzaTwoPage } from './desc-pizza-two.page';

import { EternalModule } from '../eternal/eternal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescPizzaTwoPageRoutingModule,
    EternalModule
  ],
  declarations: [DescPizzaTwoPage]
})
export class DescPizzaTwoPageModule {}
