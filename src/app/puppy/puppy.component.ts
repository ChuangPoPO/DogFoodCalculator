import { Component, OnInit } from '@angular/core';
import { FEEDS } from '../shared/models/dog-data-structure';

import * as AppUtils from '../utils/app.utils';
import {PuppyService} from '../shared/services/puppy.service';


@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.css'],
  providers: [PuppyService]
})


export class PuppyComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  constructor(private puppyService:PuppyService){}

  title = '憨吉飼料計算機';
 
  kg:number;
  lb:number;
 
  year:number = 2017;
  month:number = 1;
  day:number = 3;
  today = new Date();

  clickMessage:string = '';

  onClickSubmit():void {

     let bJDN:number = AppUtils.DatesUtils.julianDayNumber(this.year, this.month, this.day);
     let tJDN:number = AppUtils.DatesUtils.julianDayNumber(this.today.getFullYear(), (this.today.getMonth()+1) , this.today.getDate());
     
     let birthStage:number = this.puppyService.whichBirthStage(bJDN, tJDN);
     
     this.lb = this.kg * 2.204623;

     let weightStage:number = this.puppyService.whichWeightStage(this.lb);
     let stage:number = 5 * birthStage + weightStage;
     

     if(birthStage < 3 && weightStage < 5){
       let spoonTotal:number = this.puppyService.caculateSpoon(this.lb, stage);
       let spoonNum:number = spoonTotal * 8 * 30 / 4 / 15;
       this.clickMessage = '(一天四餐) 每餐  '+ spoonNum.toPrecision(2) + '  湯匙';
     }else{
       this.clickMessage = '您的狗狗不適用此飼料';
     }

  }

}
