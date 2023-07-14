import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'taba-create-customer-reporter-form',
  templateUrl: './create-customer-reporter-form.component.html',
  styleUrls: ['./create-customer-reporter-form.component.scss'],
})
export class CreateCustomerReporterFormComponent {
  environmentCustomerReporters: any = {
    label: '',
    image: '',
    route: '',
    category: '',
    comment: '',
  };
  onSubmit(form: NgForm) {}
}
