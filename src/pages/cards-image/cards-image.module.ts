import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsImagePage } from './cards-image';

@NgModule({
  declarations: [
    CardsImagePage,
  ],
  imports: [
    IonicPageModule.forChild(CardsImagePage),
  ],
})
export class CardsImagePageModule {}
