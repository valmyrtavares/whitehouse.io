import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { promotionsEdit } from 'src/app/model/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion-form.component.html',
  styleUrls: ['./promotion-form.component.scss'],
})
export class PromotionFormComponent implements OnInit {
  dataPromotion: promotionsEdit[];
  dataPromotionEdit: promotionsEdit;
  currentId: string = '';
  editField: boolean = false;
  createForm: boolean = false;
  @ViewChild('nodisplay') nodisplay: TemplateRef<any>;

  @ViewChild('productEdit', { static: false }) form: NgForm;

  constructor(private newApi: ApiRealtimeDatabaseService) {}

  ngOnInit() {
    this.fetchEnvironmentPromotions();
  }

  fetchEnvironmentPromotions() {
    this.newApi.getData('promotions').subscribe((data: promotionsEdit[]) => {
      this.dataPromotion = data;
      console.log(this.dataPromotion);
    });
  }

  deletePromotion(id: string) {
    this.newApi.deleteImage('promotions', id).subscribe((res) => {
      console.log(res);
      this.fetchEnvironmentPromotions();
    });
  }

  PromotionObj: promotionsEdit = {
    title: '',
    comment: '',
    id: '',
  };

  onEditClicked(id: string) {
    this.currentId = id;
    this.editField = true;
    let PromotionObj = this.dataPromotion.find((item) => {
      return item.id === id;
    });
    if (PromotionObj) {
      this.form.setValue({
        title: PromotionObj.title,
        comment: PromotionObj.comment,
        id: this.currentId,
      });
    }
  }

  onEdit(form: NgForm) {
    this.editField = false;
    this.newApi.updateImage('promotions', this.currentId, form);
    setTimeout(() => {
      this.fetchEnvironmentPromotions();
    }, 1000);
  }
  toggleCreateForm() {
    this.createForm = !this.createForm;
  }
}
