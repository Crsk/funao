import { CreateFunaDialog } from './create-funa.dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicModule } from '../../modules/basic/basic.module';
import { MaterialButtonsIndicatorsModule } from '../../modules/material/buttons-indicators.module';
import { MaterialFormControlsModule } from '../../modules/material/form-controls.module';
import { MaterialPopuosModalsModule } from '../../modules/material/popuos-modals.module';
import { MaterialLayoutModule } from '../../modules/material/layout.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateFunaDialog],
  imports: [CommonModule,
    BasicModule,
    FormsModule,
    MaterialButtonsIndicatorsModule,
    MaterialFormControlsModule,
    MaterialPopuosModalsModule,
    MaterialLayoutModule,
  ],
  exports: [CreateFunaDialog],
  entryComponents: [CreateFunaDialog],
})

export class CreateFunaDialogModule { }
