import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules: any[] = [
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialPopuosModalsModule { }
