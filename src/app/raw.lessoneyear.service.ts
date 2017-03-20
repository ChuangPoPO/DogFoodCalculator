import {Injectable} from '@angular/core';

import {FEEDS} from './dog-data-structure';

@Injectable()

export class RawLessoneyearService {

    whichBirthStage(bJDN:number, tJDN:number):number{
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

  whichWeightStage(lb:number):number{
    if(lb>=2 && lb<11){
      return 0;
    }else if(lb>=11 && lb<21){
      return 1;
    }else if(lb>=21 && lb<31){
      return 2;
    }else if(lb>=31 && lb<41){
      return 3;
    }else if(lb>=41 && lb<51){
      return 4;
    }else{
      return 10;
    }
  }

  caculateSpoon(lb:number, stage:number): number { //,today:Date
    let spoon:number = 0;

    let a1 = FEEDS[stage]["a1"];
    let a2 = FEEDS[stage]["a2"];
    let a3 = FEEDS[stage]["a3"];
    let a4 = FEEDS[stage]["a4"];

    return a1 + (lb - a2) * a3 / a4;
  }

}

  