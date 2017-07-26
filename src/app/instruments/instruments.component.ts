import { Component,ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import  { Instrument } from './instruments';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
@Component({
  templateUrl: 'instruments.component.html'
  
})
export class InstrumentComponent {
  public instruments: Array<Instrument> ;

  constructor() {

    this.instruments = [new Instrument('Celltac F Mek 8222','d1'), new Instrument('Celltac F Mek ','d2'), new Instrument('Celltac F ','d3')];

    console.log('constructor');


  }
  
  public myModal;


  public editInstrumentClicked(e: any): void {
    console.log('works');
  }
  
  

}