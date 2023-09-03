import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'taba-creation-promotion',
  templateUrl: './creation-promotion.component.html',
  styleUrls: ['./creation-promotion.component.scss'],
})
export class CreationPromotionComponent {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  @Input() title: string;
  @Input() typeForm: string;
  @Input() editableObj: any;

  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private router: Router
  ) {}

  chooseEditOrAdd(form: NgForm) {
    if (this.typeForm === 'add') {
      this.onSubmit(form);
    } else if (this.typeForm === 'edit') {
      this.onEdit(form);
    }
  }

  onSubmit(form: NgForm) {
    this.newApi.createCollection('promotions', form.value);
    this.fetchEnvironmentPromotions();
    this.closeForm();
  }
  fetchEnvironmentPromotions() {
    this.newApi.getData('promotions').subscribe(() => {
      this.router.navigate([`/promotion`]);
    });
  }

  onEdit(form: NgForm) {
    this.closeForm();
    this.newApi.updateImage('promotions', form.value.id, form.value);
    this.fetchEnvironmentPromotions();
  }

  closeForm() {
    this.parentFunction.emit(this.typeForm);
  }
}
