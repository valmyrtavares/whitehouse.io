import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGuardService } from 'src/app/mock/admin-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private adminGuard: AdminGuardService) {}
  onSubmit(form: NgForm) {
    if (form.value.password === '1234') {
      this.adminGuard.currentRoute = true;
      this.router.navigate(['menu-form']);
    } else {
      alert('senha incorreta');
    }
  }
}
