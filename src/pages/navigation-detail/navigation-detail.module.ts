import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationDetailPage } from './navigation-detail';

@NgModule({
  declarations: [
    NavigationDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationDetailPage),
  ],
})
export class NavigationDetailPageModule {}
