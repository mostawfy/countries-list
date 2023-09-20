import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { SnackbarMessageService } from './snackbar-message.service';

@Injectable({
  providedIn: 'root',
})
export class IpService {
  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarMessageService
  ) {}

  isCurrentCountryEgypt(): Observable<boolean> {
    return this.http.get<any>('https://ipinfo.io/geo').pipe(
      map((result) => result.country === 'EG'),
      catchError((res) => {
        this.snackbarService.showErrorMessage(res.error.error.message);
        return of(true);
      })
    );
  }
}
