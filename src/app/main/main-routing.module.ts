import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './containers/countries/countries.component';
import { MainComponent } from './main.component';
import { AddCountryComponent } from './containers/add-country/add-country.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'countries',
        children: [
          {
            path: '',
            component: CountriesComponent,
          },
          {
            path: 'add',
            component: AddCountryComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
