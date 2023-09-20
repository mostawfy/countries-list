import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from './countries.service';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  constructor(private countriesService: CountriesService) {}

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'country'];

  countriesSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.countriesSubscription = this.countriesService
      .getCountriesList()
      .subscribe((countries) => {
        console.log(countries);

        this.dataSource = new MatTableDataSource<any>(
          countries.map((country, i) => ({ ...country, id: i }))
        );
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnDestroy(): void {
    this.countriesSubscription.unsubscribe();
  }
}
