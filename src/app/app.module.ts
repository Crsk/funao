import { BasicModule } from './shared/modules/basic/basic.module';
import { MaterialDataTableModule } from './shared/modules/material/data-table.module';
import { MaterialLayoutModule } from './shared/modules/material/layout.module';
import { MaterialNavigationModule } from './shared/modules/material/navigation.module';
import { MaterialButtonsIndicatorsModule } from './shared/modules/material/buttons-indicators.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseModule } from './shared/modules/firebase/firebase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFunaDialog } from './shared/dialogs/create-funa/create-funa.dialog';
import { MaterialFormControlsModule } from './shared/modules/material/form-controls.module';
import { MaterialPopuosModalsModule } from './shared/modules/material/popuos-modals.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateFunaDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseModule,

    // TODO do something with it...
    BasicModule,
    MaterialNavigationModule,
    MaterialButtonsIndicatorsModule,
    MaterialFormControlsModule,
    MaterialPopuosModalsModule,
    MaterialLayoutModule,
    MaterialDataTableModule,
  ],
  providers: [],
  entryComponents: [CreateFunaDialog],
  bootstrap: [AppComponent]
})

export class AppModule { }
