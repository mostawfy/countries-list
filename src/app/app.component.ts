import { Component, OnInit } from '@angular/core';
import { IpService } from './services/ip.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private ipService: IpService) {}
  title = 'Countries List';

  isCurrentCountryEgypt$: Observable<boolean>;

  ngOnInit(): void {
    this.isCurrentCountryEgypt$ = this.ipService.isCurrentCountryEgypt();
  }
}
