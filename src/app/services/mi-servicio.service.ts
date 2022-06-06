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

  muestraPromesa(){
    return new Promise((resolve,reject)=>{
      if(this.name){
        return resolve([{name:'promesa'}]);
      }
      return reject({message: 'error'});
    })
  }


  checkData(): Observable<any>{
    return this.observableToCheck;
  }



}
