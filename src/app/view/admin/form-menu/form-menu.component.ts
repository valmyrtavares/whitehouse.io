import { Component } from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.scss'],
})
export class FormMenuComponent {
  environementPropertyPlaces: string = 'Imagens de partes selecionadas';
  customerReports: string = 'Depoimento de clientes';
  promotion: string = 'Promoções';
  menuIconsHome: string = 'icones dos ambientes da casa';
  menuUtensilsHome: string = 'Cadastro de utenisílios';
}
