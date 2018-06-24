import { Component ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  orderList = [ 1, 2, 3, 4 ];

  ngOnInit(): void {
    setTimeout(_ => {
      this.orderList = [ ...this.orderList.reverse() ];
    }, 10000);
  }

}
