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
  ]
})

export class HomeModule { }
