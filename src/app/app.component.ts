import { Component } from '@angular/core';

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
  
  //birthday:TheDate = new TheDate();

  today = new Date();
  // todayYear = new Date().toISOString().slice(0,4).valueOf();//(0,10)
 

  onClickSubmit():void {
    // console.log(this.kg);    
     let bJDN:number = this.julianDayNumber(this.year, this.month, this.day);
     let tJDN:number = this.julianDayNumber(this.today.getFullYear(), (this.today.getMonth()+1) , this.today.getDate());
     let stage:string = this.whichStage(bJDN, tJDN);

     console.log("bJDN : " + bJDN);
     console.log("tJDN : " + tJDN);
     console.log("Stage : " + stage);
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

  private whichStage(bJDN:number, tJDN:number):string{
    let difDays:number = tJDN - bJDN;
    
    if(difDays>=0 && difDays < 123){
      return "stage1";
    }else if(difDays >=123 && difDays <245){
      return "stage2";
    }else if(difDays >=245 && difDays <366){
      return "stage3";
    }else{
      return "stage4";
    }
  }
  private caculateSpoon(kg:number): number { //,today:Date
    let spoon:number = 0;

    return spoon;
  }

}
