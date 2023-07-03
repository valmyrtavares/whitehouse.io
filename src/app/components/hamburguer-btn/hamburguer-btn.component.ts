import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'taba-hamburguer-btn',
  templateUrl: './hamburguer-btn.component.html',
  styleUrls: ['./hamburguer-btn.component.scss'],
})
export class HamburguerBtnComponent {
  OpenCloseModal: boolean = false;
  fragment: string;
  constructor(private router: Router) {}

  openMOpenCloseModalodal(route: string) {
    this.OpenCloseModal = !this.OpenCloseModal;

    if (route != 'none') {
      // if (route === 'showcase') {
      //   this.router.navigate([ fragment="sec"]);
      // }
      this.router.navigate([route]);
    }
  }
}
