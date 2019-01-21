import {Component, OnInit} from '@angular/core';
import {Nomenclature} from '../nomenclature';
import {NomenclatureService} from "../../services/nomenclatures";

@Component({
    selector: 'nomenclatures',
    templateUrl: './nomenclatures.component.html',
    styleUrls: ['./nomenclatures.component.css']
})

export class NomenclaturesComponent implements OnInit {
    nomenclatures: Nomenclature[];

    constructor(private nomenclature: NomenclatureService) {
        this.nomenclature.update.subscribe(nomenclatures => this.nomenclatures = nomenclatures);
    }

    ngOnInit() {
        this.nomenclature.getNomenclatures();
    }

    remove(nomenclature: Nomenclature) {
        this.nomenclature.remove(nomenclature);
    }
}
