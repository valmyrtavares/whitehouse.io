import { Injectable } from '@angular/core';
import { environmentPropetyModel } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  environementProperty: environmentPropetyModel[] = [
    {
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
      label: 'Fachada',
    },
    {
      label: 'Quartos',
      image:
        'https://drive.google.com/uc?export=download&id=16pXCDHIIB1mbflo6v_WtX8LNSLkcixn5',
    },
    {
      label: 'Suite 1',
      image:
        'https://drive.google.com/uc?export=download&id=1zYznhvIc7rWQ4rmdYg1erysrcWPmKE3X',
    },
    {
      label: 'Sala',
      image:
        'https://drive.google.com/uc?export=download&id=19GIwaJWhURDGruHtquCC3oBCuvVEgqmE',
    },
    {
      label: 'Cozinha',
      image:
        'https://drive.google.com/uc?export=download&id=19GIwaJWhURDGruHtquCC3oBCuvVEgqmE',
    },
    {
      label: 'Piscina',
      image:
        'https://drive.google.com/uc?export=download&id=1OYEMvanYKhKCD35-UYr2Zbr5HPmXbSgR',
    },
    {
      label: 'Jardins',
      image:
        'https://drive.google.com/uc?export=download&id=1ARjyZx-WsyzvGPmmxQt7VB1PtHgZmCTn',
    },
    {
      label: 'Churrasco',
      image:
        'https://drive.google.com/uc?export=download&id=17fs1JSN--UYmAfNAW4NTRaw-YwjnZIrU',
    },
    {
      label: 'Pizza',
      image:
        'https://drive.google.com/uc?export=download&id=1YoHZKHr0DeK-6gzUMTlTM_McnlCjkESZ',
    },
    {
      label: 'Rancho',
      image:
        'https://drive.google.com/uc?export=download&id=1gYUc--NJym-vOXKbQc4ji0hNPLnwS-QQ',
    },
    {
      label: 'Aéreo',
      image:
        'https://drive.google.com/uc?export=download&id=1v2NFx5XhqJvwQvVlo52hrTXUBwKKWn2E',
    },
    {
      label: 'Suite 2',
      image:
        'https://drive.google.com/uc?export=download&id=1X4nDA9Wf9pMFkP-zGc-LvoRZMPy33vXY',
    },
  ];

  customersReporters: environmentPropetyModel[] = [
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=1-hDAJh9J1TDjtUKyMF-wxuCXgNNF_jsW',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=14e31F_GqqfCIlw5ULIVbOFYl_bYcPSeq',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=1tmCZnvS4dLz22GLZ9PmW590ZTWAOrx6F',
    },
  ];
  mockData: any[] = [
    ['Rancho', 'Facas', 'talheres', 'copos'],
    ['Sala', 'Sofas', 'TV', 'DVD player'],
    ['Cozinha', 'Pratos', 'talheres', 'Abridor de latas'],
  ];
}
