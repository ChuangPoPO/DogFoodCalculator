import { Component } from '@angular/core';
import { FEEDS } from './dog-data-structure';

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
  today = new Date();
  // todayYear = new Date().toISOString().slice(0,4).valueOf();//(0,10)
  //birthday:TheDate = new TheDate();

  onClickSubmit():void {
    // console.log(this.kg);    
     let bJDN:number = this.julianDayNumber(this.year, this.month, this.day);
     let tJDN:number = this.julianDayNumber(this.today.getFullYear(), (this.today.getMonth()+1) , this.today.getDate());
     
     let birthStage:number = this.whichBirthStage(bJDN, tJDN);
     let weightStage:number = this.whichWeightStage(this.kg);
     let stage:number = 5 * birthStage + weightStage;

     let spoonTotal:number = this.caculateSpoon(this.kg, stage);
     
     let spoonNum:number = ((spoonTotal * 8 * 30 )/ 4 )/ 15;
     
     console.log("birthStage = " + birthStage);
     console.log("weightStage = " + weightStage);

     console.log("Stage = " + stage);
     
     console.log("spoonTotal = " + spoonTotal);
     console.log("Spoon = " + spoonNum);
    
    //  console.log("bJDN : " + bJDN);
    //  console.log("tJDN : " + tJDN);
    //  console.log("Stage : " + birthStage);
  }

  private julianDayNumber(year:number, month:number, day:number): number {
    year += 8000;
    if(month < 3){
      year--;
      month+=12;
    } 
    return (year*365) + (year/4) - (year/100) + (year/400) - 1200820 + (month*153+3)/5 - 92 + day - 1 ;
  }

  private whichBirthStage(bJDN:number, tJDN:number):number{
    let difDays:number = tJDN - bJDN;
    
    if(difDays>=0 && difDays < 123){
      return 0;
    }else if(difDays >=123 && difDays <245){
      return 1;
    }else if(difDays >=245 && difDays <366){
      return 2;
    }else{
      return 10;
    }
  }

  private whichWeightStage(kg:number):number{
    if(kg>=0.9 && kg<=4.9){
      return 0;
    }else if(kg>=5 && kg<=9.4){
      return 1;
    }else if(kg>=9.5 && kg<=13.9){
      return 2;
    }else if(kg>=14 && kg<=18.5){
      return 3;
    }else if(kg>=18.6 && kg<=22.7){
      return 4;
    }else{
      return 10;
    }
  }

  private caculateSpoon(kg:number, stage:number): number { //,today:Date
    let spoon:number = 0;

    let a1 = FEEDS[stage]["a1"];
    let a2 = FEEDS[stage]["a2"];
    let a3 = FEEDS[stage]["a3"];
    let a4 = FEEDS[stage]["a4"];
    
    console.log("a1 : " + a1);
    console.log("a2 : " + a2);
    console.log("a3 : " + a3);
    console.log("a4 : " + a4);

    return (a1 + ( (kg - a2) * a3 ) ) / a4;
  }

}
