import { SegmentPage } from './../segment/segment';
import { NavigationPage } from './../navigation/navigation';
import { CardsImagePage } from './../cards-image/cards-image';
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
  getCardImg(){
    this.navCtrl.push(CardsImagePage)
  }
  getNavigation(){
    this.navCtrl.push(NavigationPage)
  }
  segment(){
    this.navCtrl.push(SegmentPage)
  }
}

// export class NzDemoDatePickerExtraFooterComponent{
//    //日期选择
//    plainFooter = 'plain extra footer';
//    footerRender=()=>'footer'
// }
