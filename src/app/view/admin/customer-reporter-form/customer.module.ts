import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { CustomerReporterFormComponent } from './customer-reporter-form.component';
import { CreateCustomerReporterFormComponent } from './create-customer-reporter-form/create-customer-reporter-form.component';
import { FormsModule } from '@angular/forms';

//Components

@NgModule({
  declarations: [
    CustomerReporterFormComponent,
    CreateCustomerReporterFormComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class CustomerModule {}
