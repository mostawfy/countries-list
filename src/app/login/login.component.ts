import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarMessageService } from '../services/snackbar-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private snackbarMessageService: SnackbarMessageService,
    private router: Router
  ) {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return this.snackbarMessageService.showErrorMessage(
        'Submission failed! Fields must be filled'
      );
    }
    this.router.navigate(['dashboard', 'countries']);
  }
}
