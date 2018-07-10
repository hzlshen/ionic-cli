import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordManagePage } from './password-manage';

@NgModule({
  declarations: [
    PasswordManagePage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordManagePage),
  ],
})
export class PasswordManagePageModule {}
