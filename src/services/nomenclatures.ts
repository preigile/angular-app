import {EventEmitter} from '@angular/core';
import {Nomenclature} from "../app/nomenclature";
import {NOMENCLATURES} from "../mocks/nomenclatures-data";

export class NomenclatureService {
    public nomenclatures: Nomenclature[] = NOMENCLATURES;
    update: EventEmitter<Nomenclature[]> = new EventEmitter();

    public getNomenclatures() {
        this.update.emit(this.nomenclatures);
    }

    public remove(nomenclature: Nomenclature) {
        this.nomenclatures = this.nomenclatures.filter((data) => data.id !== nomenclature.id);
        this.update.emit(this.nomenclatures);
    }
}
