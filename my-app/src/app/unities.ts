export interface Unity {
  id: number;
  name: string;
  locationDescription: string;
  WorkingHour: string;
  phone: string;
  email: string
}

export const unities = [
  {
    id: 1,
    name: 'Unidade Paulista',
    locationDescription: 'Rua Leopoldo Miguez, 327 - Cambuci, São Paulo | SP - Cep: 01518-020',
    WorkingHour: '2ª a 6ª, das 09 às 20h.',
    phone: '(11) 95464-5514',
    email: 'barbeariaFiapPaulista@gmail.com'
  },
  {
    id: 2,
    name: 'Unidade Osasco',
    locationDescription: 'Av. Pref. Dr. Hirant Sanazar, 625 - Osasco | SP Cep: 06030-095',
    WorkingHour: '2ª a 6ª, das 08 às 14h.',
    phone: '(11) 95554-5454',
    email: 'barbeariaFiapOz@gmail.com'
  },
  {
    id: 3,
    name: 'Unidade Alphaville',
    locationDescription: 'Estrada da Aldeinha, 525 - Alphaville - Barueri | SP - Cep: 06465-100',
    WorkingHour: '2ª a 6ª, das 08 às 18h.',
    phone: '(11) 94654-5468',
    email: 'barbeariaFiapAlpha@gmail.com'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/