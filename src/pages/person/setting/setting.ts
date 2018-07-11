import { PrivacyPage } from './../../person/privacy/privacy';
import { AboutusPage } from './../../person/aboutus/aboutus';
import { PasswordManagePage } from './../../person/password-manage/password-manage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getPassword(){
    this.navCtrl.push(PasswordManagePage)
  }
  toAbout(){
    this.navCtrl.push(AboutusPage)
  }
  toPrivacy(){
    this.navCtrl.push(PrivacyPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
