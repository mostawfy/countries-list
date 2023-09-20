import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CountriesComponent } from './containers/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './containers/countries/countries.service';
import { AddCountryComponent } from './containers/add-country/add-country.component';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [MainComponent, CountriesComponent, AddCountryComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  providers: [CountriesService],
})
export class MainModule {}
