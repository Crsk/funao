import { CreateFunaDialog } from './create-funa.dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicModule } from '../../modules/basic/basic.module';
import { MaterialNavigationModule } from '../../modules/material/navigation.module';
import { MaterialButtonsIndicatorsModule } from '../../modules/material/buttons-indicators.module';
import { MaterialFormControlsModule } from '../../modules/material/form-controls.module';
import { MaterialPopuosModalsModule } from '../../modules/material/popuos-modals.module';
import { MaterialLayoutModule } from '../../modules/material/layout.module';
import { MaterialDataTableModule } from '../../modules/material/data-table.module';

@NgModule({
  declarations: [CreateFunaDialog],
  imports: [CommonModule,
    BasicModule,
    MaterialButtonsIndicatorsModule,
    MaterialFormControlsModule,
    MaterialPopuosModalsModule,
    MaterialLayoutModule,
  ],
  exports: [CreateFunaDialog],
  entryComponents: [CreateFunaDialog],
})

export class CreateFunaModule { }
