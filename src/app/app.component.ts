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

  today = new Date().toISOString().slice(0,10);
  

  onClickSubmit():void {
    // console.log(this.kg);
     console.log("year = " + this.year);
     console.log("month = " + this.month);
     console.log("day = " + this.day + "<br/>");

     

     console.log(this.today);
     console.log(birthday);
    //this.caculateSpoon(this.kg, this.birthday); //, this.today
  }

  private caculateSpoon(kg:number, birthday:Date): number { //,today:Date
    let spoon:number = 0;
    
    let today:Date = new Date(); //https://angular.io/docs/ts/latest/guide/pipes.html

    // let tDay:number = today.getDay();
    // let tMonth:number = today.getMonth();
    // let tYear:number = today.getFullYear();
    
    //let today: number = Date.now();
    //let birthday: number = Date.parse(this.year + "-" + this.month + "-" + this.day);
    //let d = today - birthday;

    //console.log(tYear);
    //console.log(birthday);
    //console.log(d);

    return spoon;
  }

}
