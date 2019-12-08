import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';
import { MatSlider } from '@angular/material/slider';
import { MatSlideToggle } from '@angular/material/slide-toggle';

const modules: any[] = [
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepicker,
  MatFormField,
  MatInput,
  MatRadioButton,
  MatSelect,
  MatSlider,
  MatSlideToggle,
]

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialFormControlsModule { }
