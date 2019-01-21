import {Pipe, PipeTransform} from '@angular/core';
import {Nomenclature} from "../nomenclature";
import defaultSort from '../../services/sorts'

@Pipe({name: 'sortNomenclatures'})

export class SortNomenclaturesPipe implements PipeTransform {
    transform(nomenclatures: Nomenclature[]) {
        return nomenclatures.sort(defaultSort);
    }
}
