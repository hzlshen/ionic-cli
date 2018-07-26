import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BindPhoneNumberPage } from './bind-phone-number';

@NgModule({
  declarations: [
    BindPhoneNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(BindPhoneNumberPage),
  ],
})
export class BindPhoneNumberPageModule {}
