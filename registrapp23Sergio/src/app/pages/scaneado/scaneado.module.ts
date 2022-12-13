import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScaneadoPageRoutingModule } from './scaneado-routing.module';

import { ScaneadoPage } from './scaneado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScaneadoPageRoutingModule
  ],
  declarations: [ScaneadoPage]
})
export class ScaneadoPageModule {}
