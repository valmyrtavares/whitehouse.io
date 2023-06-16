import { Component } from '@angular/core';

@Component({
  selector: 'taba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  promotion: string = 'Promoções de datas imperdíveis';
  booking: string = 'Faça a sua reserva';
}
