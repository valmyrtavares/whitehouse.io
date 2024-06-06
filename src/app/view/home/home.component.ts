import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MockService } from '../../mock/mock.service';
import { ApiService } from '../../mock/api.service';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import {
  environmentPropetyModel,
  customerReporters,
  articles,
} from 'src/app/model/models';

// import { Router, NavigationEnd } from '@angular/router';

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
  articles: environmentPropetyModel[];

  // @ViewChild('section1Element') section1Element: ElementRef;

  apiEnvironmentProperty: environmentPropetyModel[];

  constructor(
    private data: MockService,
    private api: ApiService, //private router: Router,
    private newApi: ApiRealtimeDatabaseService
  ) {}

  ngOnInit() {
    // this.dataEnvironementProperty = this.data.environementProperty;
    this.customersReporters = this.data.customersReporters;
    this.homeUtensils = this.data.mockData;
    this.articles = this.data.articles;

    // this.api.getData('environmentProperty').subscribe((environmentProperty) => {
    //   this.apiEnvironmentProperty = environmentProperty;
    // });

    this.api.getData('utensil').subscribe((data) => {
      this.homeUtensils = data;
    });

    //TODO - Refatorar em uma função externa
    this.newApi
      .getData('environementProperty')
      .subscribe((data: environmentPropetyModel[]) => {
        // console.log(data);
        this.apiEnvironmentProperty = data;
        console.log("apiEnvironmentProperty   ", this.apiEnvironmentProperty)
      });
    this.newApi
      .getData('customersReporters')
      .subscribe((data: customerReporters[]) => {
        console.log(data);
        this.customersReporters = data;
      });
  }
}
