import { Component} from '@angular/core';
import { NavController, App, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,app:App,menu:MenuController) {
    menu.enable(true)
  }
}

// export class NzDemoDatePickerExtraFooterComponent{
//    //日期选择
//    plainFooter = 'plain extra footer';
//    footerRender=()=>'footer'
// }
