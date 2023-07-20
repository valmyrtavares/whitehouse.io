import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';

@Component({
  selector: 'taba-creation-promotion',
  templateUrl: './creation-promotion.component.html',
  styleUrls: ['./creation-promotion.component.scss'],
})
export class CreationPromotionComponent {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  constructor(private newApi: ApiRealtimeDatabaseService) {}

  onSubmit(form: NgForm) {
    this.newApi.createCollection('promotions', form.value);
    this.parentFunction.emit();
  }
}
