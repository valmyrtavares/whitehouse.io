import { Component } from '@angular/core';
import { ApiService } from '../../mock/api.service';
import { promotions } from 'src/app/model/models';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent {
  dataPromotion: promotions[];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getData('promotions').subscribe((data) => {
      this.dataPromotion = data;
    });
  }
}
