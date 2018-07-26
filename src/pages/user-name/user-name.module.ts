import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserNamePage } from './user-name';

@NgModule({
  declarations: [
    UserNamePage,
  ],
  imports: [
    IonicPageModule.forChild(UserNamePage),
  ],
})
export class UserNamePageModule {}
