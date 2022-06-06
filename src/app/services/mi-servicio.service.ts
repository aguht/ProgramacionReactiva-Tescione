import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  fontSize=20;
  observableToCheck = new Observable((observer)=>{
    try{
      observer.next('aaaaaaaaa');
      observer.next('bbbbbbbbb');
    }
    catch(error){
      observer.error(error);
    }
    observer.complete();
  })
  constructor() { }

  checkData(): Observable<any>{
    return this.observableToCheck;
  }



}
