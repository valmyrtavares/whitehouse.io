import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiRealtimeDatabaseService } from '../../../mock/api-realtime-database.service';
import { utensilsCateroryEdit, utensilEdit } from 'src/app/model/models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-untensils-form',
  templateUrl: './utensils-form.component.html',
  styleUrls: ['./untensils-form.component.scss'],
})
export class UtensilsFormComponent implements OnInit {
  createCategory: boolean = true;
  utensilsCategoryList: utensilsCateroryEdit[];
  utensilsList: any[];
  titleAdd: string = 'Adicione um novo Item';
  titleEdit: string = 'Edite um item existente';
  createUtensils: boolean = false;
  editUtensils: boolean = false;
  utensilEditObj: utensilEdit;
  searchText: string = '';

  @ViewChild('nodisplay') nodisplay: TemplateRef<boolean>;
  ngOnInit() {
    this.fetchData('utensilCategories');
    this.fetchData('utensils');
  }
  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private router: Router
  ) {}

  editUtensil(id: string) {
    this.editUtensils = true;
    this.utensilEditObj = this.utensilsList.find((item) => {
      return item.id === id;
    });
  }

  deleteUtensil(id: string) {
    this.newApi.deleteImage('utensils', id).subscribe((res) => {
      this.fetchData('utensils');
    });
  }

  fetchData(data: string) {
    this.newApi.getData(data).subscribe((res: []) => {
      if (data === 'utensilCategories') {
        this.utensilsCategoryList = res;
        console.log(this.utensilsCategoryList);
      } else if (data === 'utensils') {
        this.utensilsList = res;
        console.log(this.utensilsList);
      }
    });
  }

  onSubmit(form: NgForm) {
    this.newApi.createCollection('utensils', form);
    this.newApi.getData('utensils').subscribe((res) => {
      this.router.navigate(['utensils']);
    });
  }

  onEdit(form: NgForm) {
    this.newApi.updateImage('promotions', 'this.currentId', form);
  }

  parentFunction(event: any[]) {
    if (event[1] === 'add') {
      this.onSubmit(event[0]);
    } else if (event[1] === 'edit') {
      this.onEdit(event[0]);
    }
  }
  toggleCreateForm(data: string) {
    if (data === 'add') {
      this.createUtensils = !this.createUtensils;
    }
    if (data === 'edit') {
      this.editUtensils = !this.editUtensils;
    }
  }
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}