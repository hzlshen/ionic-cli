import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsListPage } from './cards-list';

@NgModule({
  declarations: [
    CardsListPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsListPage),
  ],
})
export class CardsListPageModule {}
