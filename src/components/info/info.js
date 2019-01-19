import { Component } from '@angular/core';
import { nomenclatures } from '../../mocks/nomenclatures-data';
import template from './info.html';

@Component({
  selector: 'info',
  template
})

export class InfoComponent {
  constructor() {
    this.nomenclatures = nomenclatures;
    this.sum = 0;
  }

  getSum() {
    this.nomenclatures.forEach((data) => {
      console.log('data', data);
      this.sum += data.price;
    });

    return this.sum;
  }

  ngOnInit() {
    this.getSum()
  }
}

