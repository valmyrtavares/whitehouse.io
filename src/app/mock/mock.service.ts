import { Injectable } from '@angular/core';
import {
  environementPropertyPlaces,
  environmentPropetyModel,
  customerReporters,
  promotions,
  utensil,
} from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  environementProperty: environmentPropetyModel[] = [
    {
      comment: '',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
      label: 'Fachada',
      route: 'frontHome',
    },
    {
      comment: '',
      label: 'Quartos',
      image:
        'https://drive.google.com/uc?export=download&id=16pXCDHIIB1mbflo6v_WtX8LNSLkcixn5',
      route: 'rooms',
    },
    {
      comment: '',
      label: 'Suite 1',
      image:
        'https://drive.google.com/uc?export=download&id=1zYznhvIc7rWQ4rmdYg1erysrcWPmKE3X',
      route: 'suíteRoom',
    },
    {
      comment: '',
      label: 'Sala',
      image:
        'https://drive.google.com/uc?export=download&id=19GIwaJWhURDGruHtquCC3oBCuvVEgqmE',
      route: 'livingRoom',
    },
    {
      comment: '',
      label: 'Cozinha',
      image:
        'https://drive.google.com/uc?export=download&id=19GIwaJWhURDGruHtquCC3oBCuvVEgqmE',
      route: 'kitchen',
    },
    {
      comment: '',
      label: 'Piscina',
      image:
        'https://drive.google.com/uc?export=download&id=1OYEMvanYKhKCD35-UYr2Zbr5HPmXbSgR',
      route: 'swimmingPool',
    },
    {
      comment: '',
      label: 'Jardins',
      image:
        'https://drive.google.com/uc?export=download&id=1ARjyZx-WsyzvGPmmxQt7VB1PtHgZmCTn',
      route: 'garden',
    },
    {
      comment: '',
      label: 'Churrasco',
      image:
        'https://drive.google.com/uc?export=download&id=17fs1JSN--UYmAfNAW4NTRaw-YwjnZIrU',
      route: 'barbecueArea',
    },
    {
      comment: '',
      label: 'Pizza',
      image:
        'https://drive.google.com/uc?export=download&id=1YoHZKHr0DeK-6gzUMTlTM_McnlCjkESZ',
      route: 'pizzaArea',
    },
    {
      comment: '',
      label: 'Rancho',
      image:
        'https://drive.google.com/uc?export=download&id=1gYUc--NJym-vOXKbQc4ji0hNPLnwS-QQ',
      route: 'ranchoArea',
    },
    {
      comment: '',
      label: 'Aéreo',
      image:
        'https://drive.google.com/uc?export=download&id=1v2NFx5XhqJvwQvVlo52hrTXUBwKKWn2E',
      route: 'arero',
    },
    {
      comment: '',
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
      category: 'firstCustomer',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malo (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=14e31F_GqqfCIlw5ULIVbOFYl_bYcPSeq',
      route: 'secondCustomer',
      category: 'secondCustomer',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malo (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      label: '',
      image:
        'https://drive.google.com/uc?export=download&id=1tmCZnvS4dLz22GLZ9PmW590ZTWAOrx6F',
      route: 'thirdCustomer',
      category: 'thirdCustomer',
      comment:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malo (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
  ];

  // articles: customerReporters[] = [
  //   {
  //     label: '',
  //     image:
  //       'https://drive.google.com/uc?export=download&id=1-hDAJh9J1TDjtUKyMF-wxuCXgNNF_jsW',
  //     route: 'firstArticle',
  //   },
  //   {
  //     label: '',
  //     image:
  //       'https://drive.google.com/uc?export=download&id=14e31F_GqqfCIlw5ULIVbOFYl_bYcPSeq',
  //     route: 'secondArticle',
  //   },
  //   {
  //     label: '',
  //     image:
  //       'https://drive.google.com/uc?export=download&id=1tmCZnvS4dLz22GLZ9PmW590ZTWAOrx6F',
  //     route: 'thirdArticle',
  //   },
  // ];
  mockData: any[] = [
    ['Rancho', 'Facas', 'talheres', 'copos'],
    ['Sala', 'Sofas', 'TV', 'DVD player'],
    ['Cozinha', 'Pratos', 'talheres', 'Abridor de latas'],
  ];

  environementPropertyPlaces: environementPropertyPlaces[] = [
    {
      comment: '',
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1JPaD0v9zJowJu7xhbiRz3IM1bPExfRT0',
    },
    {
      comment: '',
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1Za6X6NqxsxC2C0PIA8tj5YrJG6frIbi2',
    },
    {
      comment: '',
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1Gh1pGOBsy5QHLCtiaUClr87HUMTgBJ8a',
    },
    {
      comment: '',
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1CBdGL_ehLoHdRqoEcfNgmrtzFbai3Qzi',
    },
    {
      comment: '',
      category: 'frontHome',
      image:
        'https://drive.google.com/uc?export=download&id=1kdQZN1zKUnaCsaF5hOK9NWGnz_PTJVqx',
    },
    {
      comment: '',
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=1Pnfr1AxY7Ly5FLOBPpJPR1_6MeTIPAmf',
    },
    {
      comment: '',
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=19I3PkH_2DaAhisXX-lO8itX7hApP1Jd7',
    },
    {
      comment: '',
      category: 'rooms',
      image:
        'https://drive.google.com/uc?export=download&id=1kQN6l6ltuFL4SfLYvP8-mRf4hgfsozX3',
    },
    {
      comment: '',
      category: 'suíteRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1EYgFVHZx8CFffZAHzHEE-ExOxy3fpZkc',
    },
    {
      comment: '',
      category: 'suíteRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1eJrHJbMm9xRReR2ppzJpnbZW9g_WP3EZ',
    },
    {
      comment: '',
      category: 'livingRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1VPYnyOH4v4ZHevcGHwUuD2_GkIbh3kry',
    },
    {
      comment: '',
      category: 'livingRoom',
      image:
        'https://drive.google.com/uc?export=download&id=1aYNupKAG3zm447v5pDYoGeq1PCSGX34b',
    },
    {
      comment: '',
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1hRQWMgVE-iRrFwYWpkdfevXaxX8gNU3E',
    },
    {
      comment: '',
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1hRQWMgVE-iRrFwYWpkdfevXaxX8gNU3E',
    },
    {
      comment: '',
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1YlmjcpcOpufG9TyW9Nv9eDakBbBJWrdE',
    },
    {
      comment: '',
      category: 'kitchen',
      image:
        'https://drive.google.com/uc?export=download&id=1Zx8ev_tKuykvS4Xl2VXcVNKaySoqrhmI',
    },
    {
      comment: '',
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=1FJknVKo5zr81wsxnLjFrAPkrjDEJutlB',
    },
    {
      comment: '',
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=1-_yQZjOMfe7pIsVO2xxf-4csbZHIta2i',
    },
    {
      comment: '',
      category: 'swimmingPool',
      image:
        'https://drive.google.com/uc?export=download&id=1Ln0rjaiKoIIVo-WE3uW31GqxLSklB1uw',
    },
    {
      comment: '',
      category: 'garden',
      image:
        'https://drive.google.com/uc?export=download&id=1Id7_UTW59CX-6Nv1i0-muF3_xmvFE3Uy',
    },
    {
      comment: '',
      category: 'garden',
      image:
        'https://drive.google.com/uc?export=download&id=1NnMl7KsAj-YAm5J4HYt1sN9CfR2w0qy9',
    },
    {
      comment: '',
      category: 'barbecueArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'barbecueArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'pizzaArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'pizzaArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'ranchoArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'ranchoArea',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'arero',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'arero',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'secondSuite',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
    {
      comment: '',
      category: 'secondSuite',
      image:
        'https://drive.google.com/uc?export=download&id=15ssu7Z0gGjSnbBtdgoKKLkyVBT8Tmu3-',
    },
  ];

  promotions: promotions[] = [
    {
      title: 'Promoção de Outubro',
      description:
        '5 dias no paraíso por apenas de 5 a 10 de Outubro R$ 5.500,00 com Chatz Incluso',
    },
    {
      title: 'Promoção de Verão',
      description:
        '10 dias no paraíso por apenas de 7 a 17 de Outubro R$ 25.500,00 com Chatz Incluso',
    },
    {
      title: 'Promoção de Novembro',
      description:
        'Fim de seman perfeito por apenas de 5 a 10 de Outubro R$ 5.500,00 com Chatz Incluso',
    },
  ];

  utensils: utensil[] = [
    {
      title: true,
      label: 'Facas',
      image: '',
      category: 'barbecueArea',
      categoryLabel: 'Churrasco',
    },
    {
      title: false,
      label: 'Grelha',
      image: '',
      category: 'barbecueArea',
      categoryLabel: 'Churrasco',
    },
    {
      title: false,
      label: 'Espeto',
      image: '',
      category: 'barbecueArea',
      categoryLabel: 'Churrasco',
    },
    {
      title: true,
      label: 'Aspirador de pó',
      image: '',
      category: 'cleaning',
      categoryLabel: 'Limpeza',
    },
    {
      title: false,
      label: 'Rodo',
      image: '',
      category: 'cleaning',
      categoryLabel: 'Limpeza',
    },
    {
      title: true,
      label: 'espelho',
      image: '',
      category: 'restroom',
      categoryLabel: 'Cama e banho',
    },
    {
      title: false,
      label: 'Travesseiros',
      image: '',
      category: 'restroom',
      categoryLabel: 'Cama e banho',
    },
    {
      title: true,
      label: 'Abridor de lata',
      image: '',
      category: 'kitchen',
      categoryLabel: 'Cozinha',
    },
    {
      title: false,
      label: 'Talheres',
      image: '',
      category: 'kitchen',
      categoryLabel: 'Cozinha',
    },
    {
      title: false,
      label: 'Abridor de vinho',
      image: '',
      category: 'kitchen',
      categoryLabel: 'Cozinha',
    },
    {
      title: false,
      label: 'Loça',
      image: '',
      category: 'kitchen',
      categoryLabel: 'Cozinha',
    },
    {
      title: true,
      label: 'Cadeira de sol',
      image: '',
      category: 'swimmingPool',
      categoryLabel: 'Piscina',
    },
    {
      title: false,
      label: 'Guarda Sol',
      image: '',
      category: 'swimmingPool',
      categoryLabel: 'Piscina',
    },
  ];
}
