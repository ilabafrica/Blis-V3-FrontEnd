import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FacilitiesComponent } from './facilities.component';
import { FacilitiesRoutingModule } from './facilities-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   FacilitiesRoutingModule,
      FormsModule,
      CommonModule
  ],
  declarations: [ FacilitiesComponent ]
})
export class FacilitiesModule { }