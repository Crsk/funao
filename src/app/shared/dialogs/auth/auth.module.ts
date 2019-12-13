import { BasicModule } from './../../modules/basic/basic.module';
import { AuthDialog } from './auth.dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthDialog],
  imports: [
    CommonModule,
    BasicModule,
  ],
  entryComponents: [AuthDialog],
  exports: [AuthDialog]
})

export class AuthDialogModule { }
