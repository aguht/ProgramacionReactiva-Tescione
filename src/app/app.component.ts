import { Component, Input, OnInit } from '@angular/core';
import { delay, map, subscribeOn } from 'rxjs';
import { MiServicioService } from './services/mi-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  constructor(private servicio: MiServicioService) {
    console.log(servicio.fontSize);
  }

  ngOnInit(): void {
      this.recibirDato();
      this.muestra();
  }

  recibirDato() {
    this.servicio.checkData()
    .pipe(delay(2000),map((char)=>char.toUpperCase()))
    .subscribe(
      val=>{
	console.log(val);
      }
    ) 
  }

  muestra(){
    this.servicio.muestraPromesa()
    .then((x)=>{console.log(x)})
    .catch((error)=>console.log(error))
  }

}
