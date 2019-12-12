import { FunaComponent } from './funa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLayoutModule } from '../../modules/material/layout.module';
import { MaterialButtonsIndicatorsModule } from '../../modules/material/buttons-indicators.module';
import { BasicModule } from '../../modules/basic/basic.module';

@NgModule({
  declarations: [FunaComponent],
  imports: [
    CommonModule,
    BasicModule,
    MaterialLayoutModule,
    MaterialButtonsIndicatorsModule,
  ],
  exports: [FunaComponent]
})

export class FunaModule { }
