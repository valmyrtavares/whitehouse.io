import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { article } from 'src/app/model/models';

@Component({
  selector: 'taba-create-articles-form',
  templateUrl: './create-articles-form.component.html',
  styleUrls: ['./create-articles-form.component.scss'],
})
export class CreateArticlesFormComponent {
  @Output() closeModal = new EventEmitter();
  @Input() editableObj: article;
  @Input() title: string;
  @Input() typeForm: string;
  articles: any;
  currentId: string;

  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private router: Router
  ) {}

  ngOnInit(){
    console.log("OBJETO PASSADO    ", this.editableObj)
  }

  chooseEditOrAdd(data: NgForm) {
    if (this.typeForm === 'add') {
      this.onSubmit(data);
    } else if (this.typeForm === 'edit') {
      this.currentId = this.editableObj.id;
      this.onEdit(data);
    }
  }
  onEdit(data: NgForm) {
    this.newApi.updateImage('articles', this.currentId, data.value);
    this.router.navigate([`/showcase/${data.value.category}`]);
  }

  onSubmit(data: NgForm) {
    this.newApi.createCollection('articles', data.value);
    this.router.navigate([`/showcase/${data.value.category}`]);
  }
  closeFormCreate() {
    this.closeModal.emit(this.typeForm);
  }
}
