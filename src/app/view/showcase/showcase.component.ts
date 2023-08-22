import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '../../mock/mock.service';
import { ApiService } from '../../mock/api.service';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import {
  environementPropertyPlaces,
  customerReporters,
  article,
} from 'src/app/model/models';

@Component({
  selector: 'taba-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  @ViewChild('waitingLoad') waitingLoad: TemplateRef<string>;
  id: string;
  imagesData: any; //environementPropertyPlaces[] | customerReporters[];
  imagesDataFiltered: any;

  isCustomer: boolean = true;
  dataKey: string;

  constructor(
    private route: ActivatedRoute,
    private data: MockService,
    private api: ApiService,
    private newApi: ApiRealtimeDatabaseService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchImages();
    }, 1000);
  }
  //ngAfterViewInit(): void {
  // this.fetchImages();
  // }

  fetchImages() {
    const arrayMappings = {
      firstCustomer: 'customersReporters',
      secondCustomer: 'customersReporters',
      thirdCustomer: 'customersReporters',
      gastronomyArticle: 'articles',
      toursArticle: 'articles',
      internalAreaArticle: 'articles',
      default: 'environementPropertyPlaces',
    };
    this.dataKey = arrayMappings[this.id] || arrayMappings['default'];

    if (this.dataKey === 'environementPropertyPlaces') {
      this.isCustomer = false;
    }

    this.newApi.getData(this.dataKey).subscribe((data) => {
      this.imagesData = data;
      this.filterData();
    });
  }

  filterData() {
    this.imagesDataFiltered = this.imagesData.filter(
      (item) => item.category === this.id
    );
  }
}
//857801483137  cip  59852525 senha
