import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { StandaloneComponentsComponent } from './standalone-components/standalone-components.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
