import { Component } from '@angular/core';
import { NavController,ActionSheetController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public platform: Platform,public navCtrl: NavController,public actionSheetCtrl:ActionSheetController) {

  }
  openMenu(){
     //声明数组
      const actionSheet = this.actionSheetCtrl.create({
        title:"选择框",
        buttons:[
          {
            text:'分享',
            role:'destructive',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler:()=>{
              console.log("分享")
            }
          },
          {
            text:'注册',
            role:'注册',
            handler:()=>{
              console.log("注册")
            }
          },
          {
            text:'Cancel',
            role:'cancel',
            handler:()=>{
              console.log("退出")
            }
          }
        ]
      })
      actionSheet.present();
    }
}
