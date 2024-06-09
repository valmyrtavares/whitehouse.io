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
  addPromotionModalTitle: string = 'Adicione uma  promoção';
  editPromotionModalTitle: string = 'Edite a promoção';
  dataPromotion: promotionsEdit[];
  editableObj: any[];
  dataPromotionEdit: promotionsEdit;
  currentId: string = '';
  editField: boolean = false;
  createForm: boolean = false;
  editForm: boolean = false;
  @ViewChild('nodisplay') nodisplay: TemplateRef<any>;

  @ViewChild('productEdit', { static: false }) form: NgForm;

  constructor(private newApi: ApiRealtimeDatabaseService) {}

  ngOnInit() {
    this.fetchEnvironmentPromotions();
  }

  fetchEnvironmentPromotions() {
    this.newApi.getData('promotions').subscribe((data: promotionsEdit[]) => {
      this.dataPromotion = data;    
    });
  }

  deletePromotion(id: string) {
    this.newApi.deleteImage('promotions', id).subscribe((res) => {    
      this.fetchEnvironmentPromotions();
    });
  }

  PromotionObj: promotionsEdit = {
    title: '',
    comment: '',
    id: '',
  };

  onEditClicked(item: any) {
    this.editableObj = item;
    this.toggleCreateEditForm('edit');
  }

  toggleCreateForm() {
    this.createForm = !this.createForm;
  }
  hiddenEditModasl() {
    this.editField = false;
  }

  toggleCreateEditForm(typeForm: string) {
    if (typeForm === 'edit') {
      this.editForm = !this.editForm;
      if (this.editForm === true) {
        this.createForm = false;
      }
    } else if (typeForm === 'add') {
      this.createForm = !this.createForm;
      if (this.createForm === true) {
        this.editForm = false;
      }
    }
  }
}
