import { Component, OnInit } from '@angular/core';
import { MockService } from '../../mock/mock.service';
import { environmentPropetyModel } from 'src/app/model/models';

@Component({
  selector: 'taba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  promotion: string = 'Promoções de datas imperdíveis';
  booking: string = 'Faça a sua reserva';
  dataEnvironementProperty: environmentPropetyModel[];
  customersReporters: environmentPropetyModel[];

  constructor(private data: MockService) {}

  ngOnInit() {
    this.dataEnvironementProperty = this.data.environementProperty;
    this.customersReporters = this.data.customersReporters;
  }
}
