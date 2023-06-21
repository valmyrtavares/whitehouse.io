import { Injectable } from '@angular/core';
import {
  environementPropertyPlaces,
  environmentPropetyModel,
  customerReporters,
} from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  environementProperty: environmentPropetyModel[] = [
    {
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
      label: 'Fachada',
      route: 'frontHome',
    },
    {
      label: 'Quartos',
      image:
        'https://drive.google.com/uc?export=download&id=16pXCDHIIB1mbflo6v_WtX8LNSLkcixn5',
      route: 'rooms',
    },
    {
      label: 'Suite 1',
      image:
        'https://drive.google.com/uc?export=download&id=1zYznhvIc7rWQ4rmdYg1erysrcWPmKE3X',
      route: 'suíteRoom',
    },
    {
      label: 'Sala',
      image:
        'https://drive.google.com/uc?export=download&id=19GIwaJWhURDGruHtquCC3oBCuvVEgqmE',
      route: 'livingRoom',
    },
    {
      label: 'Cozinha',
      image:
        'https://drive.google.com/uc?export=download&id=19GIwaJWhURDGruHtquCC3oBCuvVEgqmE',
      route: 'kitchen',
    },
    {
      label: 'Piscina',
      image:
        'https://drive.google.com/uc?export=download&id=1OYEMvanYKhKCD35-UYr2Zbr5HPmXbSgR',
      route: 'swimmingPool',
    },
    {
      label: 'Jardins',
      image:
        'https://drive.google.com/uc?export=download&id=1ARjyZx-WsyzvGPmmxQt7VB1PtHgZmCTn',
      route: 'garden',
    },
    {
      label: 'Churrasco',
      image:
        'https://drive.google.com/uc?export=download&id=17fs1JSN--UYmAfNAW4NTRaw-YwjnZIrU',
      route: 'barbecueArea',
    },
    {
      label: 'Pizza',
      image:
        'https://drive.google.com/uc?export=download&id=1YoHZKHr0DeK-6gzUMTlTM_McnlCjkESZ',
      route: 'pizzaArea',
    },
    {
      label: 'Rancho',
      image:
        'https://drive.google.com/uc?export=download&id=1gYUc--NJym-vOXKbQc4ji0hNPLnwS-QQ',
      route: 'ranchoArea',
    },
    {
      label: 'Aéreo',
      image:
        'https://drive.google.com/uc?export=download&id=1v2NFx5XhqJvwQvVlo52hrTXUBwKKWn2E',
      route: 'arero',
    },
    {
      label: 'Suite 2',
      image:
        'https://drive.google.com/uc?export=download&id=1X4nDA9Wf9pMFkP-zGc-LvoRZMPy33vXY',
      route: 'secondSuite',
    },
  ];

  customersReporters: customerReporters[] = [
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=1-hDAJh9J1TDjtUKyMF-wxuCXgNNF_jsW',
      route: 'firstCustomer',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=14e31F_GqqfCIlw5ULIVbOFYl_bYcPSeq',
      route: 'secondCustomer',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=1tmCZnvS4dLz22GLZ9PmW590ZTWAOrx6F',
      route: 'thirdCustomer',
    },
  ];

  articles: customerReporters[] = [
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=1-hDAJh9J1TDjtUKyMF-wxuCXgNNF_jsW',
      route: 'firstArticle',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=14e31F_GqqfCIlw5ULIVbOFYl_bYcPSeq',
      route: 'secondArticle',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=1tmCZnvS4dLz22GLZ9PmW590ZTWAOrx6F',
      route: 'thirdArticle',
    },
  ];
  mockData: any[] = [
    ['Rancho', 'Facas', 'talheres', 'copos'],
    ['Sala', 'Sofas', 'TV', 'DVD player'],
    ['Cozinha', 'Pratos', 'talheres', 'Abridor de latas'],
  ];

  environementPropertyPlaces: environementPropertyPlaces[] = [
    {
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'suíteRoom',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'suíteRoom',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'livingRoom',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'livingRoom',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'garden',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'garden',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'barbecueArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'barbecueArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'pizzaArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'pizzaArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'ranchoArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'ranchoArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'arero',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'arero',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'secondSuite',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      category: 'secondSuite',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
  ];
}
