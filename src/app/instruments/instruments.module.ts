import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { InstrumentComponent } from './instruments.component';
import { InstrumentRoutingModule } from './instruments-routing.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
   InstrumentRoutingModule,
      FormsModule,
      CommonModule
  ],
  declarations: [ InstrumentComponent ]
})
export class InstrumentModule { }
