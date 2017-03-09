import { Component } from '@angular/core';
import { TheDate } from './arrays';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Dog Food Calculator';
  kg:number;
  year:number = 2017;
  month:number = 1;
  day:number = 3;
  
  //birthday:TheDate;
  //today:TheDate;

  //birthday{this.year, this.month, this.day};

  today = new Date();//.getDate();
  // todayYear = new Date().toISOString().slice(0,4).valueOf();//(0,10)
  // todayMonth = new Date().toISOString().slice(5,7);
  // todayDay = new Date().toISOString().slice(8,10);

  onClickSubmit():void {
    // console.log(this.kg);
     console.log("Byear = " + this.year);
     console.log("Bmonth = " + this.month);
     console.log("Bday = " + this.day);

    //  console.log("todayYear : " + this.todayYear);
    //  console.log("todayMonth : " + this.todayMonth);
    //  console.log("todayDay : " + this.todayDay);

     let bJDN:number = this.julianDayNumber(this.year, this.month, this.day);
     let tJDN:number = this.julianDayNumber(this.today.getFullYear(), this.today.getMonth(), this.today.getDay());
     
     console.log("todayYear : " + this.today.getFullYear());
     console.log("todayMonth : " + this.today.getMonth());
     console.log("todayDay : " + this.today.getDay());
     
     console.log("bJDN : " + bJDN);
     console.log("tJDN : " + tJDN);
    //this.caculateSpoon(this.kg, this.birthday); //, this.today
  }

  private julianDayNumber(year:number, month:number, day:number): number {
    year += 8000;
    if(month < 3){
      year--;
      month+=12;
    } 
    return (year*365) + (year/4) - (year/100) + (year/400) - 1200820 + (month*153+3)/5 - 92 + day - 1 ;
  }

  private caculateSpoon(kg:number): number { //,today:Date
    let spoon:number = 0;

    return spoon;
  }

}
