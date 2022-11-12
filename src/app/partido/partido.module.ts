import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PartidoPageRoutingModule } from './partido-routing.module';

import { PartidoPage } from './partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartidoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PartidoPage]
})
export class PartidoPageModule {}
