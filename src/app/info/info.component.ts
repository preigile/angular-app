import {Component, OnInit} from '@angular/core';
import {Nomenclature} from '../nomenclature';
import {NomenclatureService} from "../../services/nomenclatures";

@Component({
    selector: 'info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
    nomenclatures: Nomenclature[];
    sum: number = 0;

    constructor(private nomenclature:NomenclatureService){
        this.nomenclature.update.subscribe(nomenclatures => {
            this.sum = 0;
            this.nomenclatures = nomenclatures.filter((data) => data.status === 'Available');
            this.nomenclatures.forEach((data) => {
                this.sum += data.price;
            });
        });
    }

    ngOnInit() {}

    update() {
        this.nomenclature.recount();
    }
}
