import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }


  stat (list:any[],criteria:string,valeur:any){
    let n=0;
    for (let i in list){
      if (list[i][criteria]==valeur){
        n++;
      }
    }
    return n;
  }
}
