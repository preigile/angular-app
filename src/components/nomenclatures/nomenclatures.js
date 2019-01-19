import { Component } from '@angular/core';
import { nomenclatures } from '../../mocks/nomenclatures-data';
import template from './nomenclatures.html';

@Component({
  selector: 'nomenclatures',
  template
})

export class NomenclaturesComponent {
  constructor() {
    this.nomenclatures = nomenclatures;
  }
}
