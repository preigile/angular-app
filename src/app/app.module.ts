import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SortNomenclaturesPipe} from "./nomenclatures/nomenclatures.pipe";

import {NomenclatureService} from '../services/nomenclatures';
import {AppComponent} from './app.component';
import {InfoComponent} from './info/info.component';
import {NomenclaturesComponent} from './nomenclatures/nomenclatures.component';

@NgModule({
    declarations: [
        AppComponent,
        InfoComponent,
        NomenclaturesComponent,
        SortNomenclaturesPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [NomenclatureService],
    bootstrap: [AppComponent]
})

export class AppModule {}
