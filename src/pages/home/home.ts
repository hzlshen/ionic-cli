import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides:Slides;

  //声明
  searchQuery:string='';
  items:string[];

  constructor(public navCtrl: NavController) {

  }

  //轮播
  goToSlide(){
    this.slides.slideTo(2,500);
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('index is',currentIndex);
  }
  ngAfterViewInit() {
    this.slides.freeMode = true;
  }

  // 搜索
  initialzeItems(){
    this.items=[
      '张三',
      '李四',
      '大王',
      '小王',
      '你好',
    ];
  }

  getItems(ev:any){
    //调取数组数据
    this.initialzeItems();
    //获取input框的value
    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item)=>{
        return (item.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }


  }



  //初始化slides
  initSlides(){

  }

}
