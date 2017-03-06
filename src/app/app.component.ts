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
  //
  onClickSubmit():void {
    console.log(this.kg);
    console.log(this.year);
    console.log(this.month);
    console.log(this.day);
  }

}
