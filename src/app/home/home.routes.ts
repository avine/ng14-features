import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { StandaloneComponentsComponent } from './standalone-components/standalone-components.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'standalone-components',
        component: StandaloneComponentsComponent,
      },
      {
        path: 'typed-forms',
        component: TypedFormsComponent,
      },
    ],
  },
];
