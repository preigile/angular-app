import {EventEmitter} from '@angular/core';
import defaultSort from './sorts';
import {Nomenclature} from "../app/nomenclature";
import {Price} from "../app/price";
import {NOMENCLATURES} from "../mocks/nomenclatures-data";
import {PRICES} from "../mocks/nomenclature-prices";

export class NomenclatureService {
    private prices: Price[] = PRICES || [];
    public nomenclatures: Nomenclature[] = NOMENCLATURES || [];

    update: EventEmitter<Nomenclature[]> = new EventEmitter();

    public getNomenclatures() {
        this.update.emit(this.nomenclatures);
    }

    public remove(nomenclature: Nomenclature) {
        this.nomenclatures = this.nomenclatures.filter((data) => data.id !== nomenclature.id);
        this.update.emit(this.nomenclatures);
    }

    public recount() {
        console.log('recount');

        let priceMap = {};

        for (let i of this.prices) {
            priceMap[i.id] = i;
        }

        this.nomenclatures.map((data) => {
            let update = priceMap[data.id];

            if (!update) {
                return;
            }

            data.status = update.status;
            data.price = update.price;
        });

        this.update.emit(this.nomenclatures.sort(defaultSort));
    }
}
