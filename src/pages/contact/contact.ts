import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public actionSheetCtrl:ActionSheetController) {

  }
  openMenu(){
     //声明数组
      const actionSheet = this.actionSheetCtrl.create({
        title:"选择框",
        buttons:[
          {
            text:'登录',
            role:'登录',
            handler:()=>{
              console.log("登录")
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
            text:'退出',
            role:'退出',
            handler:()=>{
              console.log("退出")
            }
          }
        ]
      })
      actionSheet.present();
    }
}
