import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  name:string;
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

  muestraPromesa(value:string){
    return new Promise((resolve,reject)=>{
      setTimeout(() => resolve(value), 3000);
    }
)
  }


  checkData(): Observable<any>{
    return this.observableToCheck;
  }



}
