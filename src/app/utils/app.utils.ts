export class DatesUtils{
    public static julianDayNumber(year:number, month:number, day:number): number {
      year += 8000;
      if(month < 3){
        year--;
        month+=12;
      } 
      return (year*365) + (year/4) - (year/100) + (year/400) - 1200820 + (month*153+3)/5 - 92 + day - 1 ;
    }
}