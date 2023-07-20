import { Component } from '@angular/core';
import { ApiService } from '../../mock/api.service';
import { promotions } from 'src/app/model/models';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent {
  dataPromotion: promotions[];

  constructor(
    private api: ApiService,
    private newApi: ApiRealtimeDatabaseService
  ) {}

  ngOnInit() {
    this.newApi.getData('promotions').subscribe((data: promotions[]) => {
      this.dataPromotion = data;
    });
  }
}
