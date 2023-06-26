import { Component, OnInit } from '@angular/core';
import { MockService } from '../../mock/mock.service';
import { ApiService } from '../../mock/api.service';
import {
  environmentPropetyModel,
  customerReporters,
} from 'src/app/model/models';

@Component({
  selector: 'taba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  promotion: string = 'Promoções de datas imperdíveis';
  booking: string = 'Faça a sua reserva';
  customersReporters: customerReporters[];
  homeUtensils: string[];
  dataEnvironementProperty: environmentPropetyModel[];
  apiEnvironmentProperty: environmentPropetyModel[];

  constructor(private data: MockService, private api: ApiService) {}

  ngOnInit() {
    this.dataEnvironementProperty = this.data.environementProperty;
    this.customersReporters = this.data.customersReporters;
    this.homeUtensils = this.data.mockData;

    this.api.getData('environmentProperty').subscribe((environmentProperty) => {
      this.apiEnvironmentProperty = environmentProperty;
    });
  }
}
