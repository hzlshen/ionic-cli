import { BindPhoneNumberPage } from './../../person/bind-phone-number/bind-phone-number';
import { UserNamePage } from './../../person/user-name/user-name';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {

  gender:string = "f";
  gaming: string = "n64";
  os: string;
  music: string;
  month: string;
  year: number;

  musicAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }
  stpSelect() {
    console.log('STP selected');
  }

  //去修改昵称
  getUserName(){
    this.navCtrl.push(UserNamePage)
  }
  //绑定手机号
  clickPhone(){
    this.navCtrl.push(BindPhoneNumberPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarPage');
  }

}
