import { Component,ViewChild } from '@angular/core';

import { CommonModule } from "@angular/common";

import  { Fas } from './fas';

import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  templateUrl: 'facilities.component.html',
})
export class FacilitiesComponent {

  public fass: Array<Fas> ;

  constructor() {

    this.fass = [new Fas('AGA KHAN UNIVERSITY HOSPITAL','d1'), new Fas('AMPATH','d2'), new Fas('GK PRISON DISPENSARY','d3')];

    console.log('constructor');


  }

  public myModal;

  public editFacilitiesClicked(e: any): void {
    alert('hvhg');
    console.log('worksfc');
  }

}