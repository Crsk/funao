import { MaterialNavigationModule } from './shared/modules/material/navigation.module';
import { MaterialButtonsIndicatorsModule } from './shared/modules/material/buttons-indicators.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseModule } from './shared/modules/firebase/firebase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseModule,
    MaterialNavigationModule,
    MaterialButtonsIndicatorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
