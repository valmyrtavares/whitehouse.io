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
        'https://drive.google.com/uc?export=download&id=1JPaD0v9zJowJu7xhbiRz3IM1bPExfRT0',
    },
    {
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1Za6X6NqxsxC2C0PIA8tj5YrJG6frIbi2',
    },
    {
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1Gh1pGOBsy5QHLCtiaUClr87HUMTgBJ8a',
    },
    {
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1CBdGL_ehLoHdRqoEcfNgmrtzFbai3Qzi',
    },
    {
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1kdQZN1zKUnaCsaF5hOK9NWGnz_PTJVqx',
    },
    {
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=1Pnfr1AxY7Ly5FLOBPpJPR1_6MeTIPAmf',
    },
    {
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=19I3PkH_2DaAhisXX-lO8itX7hApP1Jd7',
    },
    {
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=1kQN6l6ltuFL4SfLYvP8-mRf4hgfsozX3',
    },
    {
      category: 'suíteRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1EYgFVHZx8CFffZAHzHEE-ExOxy3fpZkc',
    },
    {
      category: 'suíteRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1eJrHJbMm9xRReR2ppzJpnbZW9g_WP3EZ',
    },
    {
      category: 'livingRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1VPYnyOH4v4ZHevcGHwUuD2_GkIbh3kry',
    },
    {
      category: 'livingRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1aYNupKAG3zm447v5pDYoGeq1PCSGX34b',
    },
    {
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1hRQWMgVE-iRrFwYWpkdfevXaxX8gNU3E',
    },
    {
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1hRQWMgVE-iRrFwYWpkdfevXaxX8gNU3E',
    },
    {
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1YlmjcpcOpufG9TyW9Nv9eDakBbBJWrdE',
    },
    {
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1Zx8ev_tKuykvS4Xl2VXcVNKaySoqrhmI',
    },
    {
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=1FJknVKo5zr81wsxnLjFrAPkrjDEJutlB',
    },
    {
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=1-_yQZjOMfe7pIsVO2xxf-4csbZHIta2i',
    },
    {
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=1Ln0rjaiKoIIVo-WE3uW31GqxLSklB1uw',
    },
    {
      category: 'garden',
      image:
        'https://drive.google.com/uc?export=download&id=1Id7_UTW59CX-6Nv1i0-muF3_xmvFE3Uy',
    },
    {
      category: 'garden',
      image:
        'https://drive.google.com/uc?export=download&id=1NnMl7KsAj-YAm5J4HYt1sN9CfR2w0qy9',
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
