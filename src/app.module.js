import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NomenclaturesComponent} from './components/nomenclatures/nomenclatures';
import {InfoComponent} from './components/info/info';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    NomenclaturesComponent,
    InfoComponent
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
