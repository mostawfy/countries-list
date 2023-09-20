import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarMessageService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 6000,
    });
  }

  showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 6000,
      panelClass: ['error-snackbar'],
    });
  }
}
