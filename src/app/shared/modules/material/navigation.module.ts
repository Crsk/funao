import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules: any[] = [
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialNavigationModule { }
