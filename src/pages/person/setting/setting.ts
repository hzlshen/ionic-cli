import { PrivacyPage } from './../../person/privacy/privacy';
import { AboutusPage } from './../../person/aboutus/aboutus';
import { PasswordManagePage } from './../../person/password-manage/password-manage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCtrl:AlertController) {
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

  //退出登录
  //弹出模态框
  signOut(){
    let alert = this.alertCtrl.create({
      title:'提示',
      message:'是否确定退出',
      buttons:['确定']
    });
    alert.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
