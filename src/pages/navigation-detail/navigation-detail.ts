import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavigationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation-detail',
  templateUrl: 'navigation-detail.html',
})
export class NavigationDetailPage {
  item;
  constructor(public navCtrl: NavController, public params: NavParams) {
    // this.item = params.data.item;
    console.log(params)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationDetailPage');
  }

}
