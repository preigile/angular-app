import {Pipe, PipeTransform} from '@angular/core';
import {Nomenclature} from "../nomenclature";

@Pipe({name: 'sortNomenclatures'})

export class SortNomenclaturesPipe implements PipeTransform {
    transform(nomenclatures: Nomenclature[]) {
        return nomenclatures.sort((first, second) => {
            if (first.status < second.status) return -1;
            if (first.code > second.code) return 1;
            if (first.status > second.status) return 1;
            if (first.code < second.code) return -1;

            return 0;
        });
    }
}
