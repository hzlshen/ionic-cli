import { CardsListPage } from './../cards-list/cards-list';
import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }

  goCardsList(){
    this.navCtrl.push(CardsListPage)
  }
}

// export class NzDemoDatePickerExtraFooterComponent{
//    //日期选择
//    plainFooter = 'plain extra footer';
//    footerRender=()=>'footer'
// }
