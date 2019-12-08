import { MaterialButtonsIndicatorsModule } from './../../shared/modules/material/buttons-indicators.module';
import { MaterialLayoutModule } from './../../shared/modules/material/layout.module';
import { BasicModule } from './../../shared/modules/basic/basic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BasicModule,
    MaterialLayoutModule,
    MaterialButtonsIndicatorsModule,
  ]
})

export class HomeModule { }
