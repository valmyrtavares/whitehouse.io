import { Component } from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.scss'],
})
export class FormMenuComponent {
  environementPropertyPlaces: string = 'Imagens de partes selecionadas';
  customerReports: string = 'Depoimento de clientes';
}
