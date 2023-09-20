import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarMessageService } from '../../../services/snackbar-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css'],
})
export class AddCountryComponent {
  constructor(
    private fb: FormBuilder,
    private snackbarMessageService: SnackbarMessageService,
    private router: Router
  ) {}

  form: FormGroup = this.fb.group({
    country: ['', [Validators.required, Validators.minLength(3)]],
  });

  submit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return this.snackbarMessageService.showErrorMessage(
        'Submission failed! Fields must be filled correctly'
      );
    }
    this.snackbarMessageService.showMessage(
      'Country has been created successfully'
    );
    this.router.navigate(['dashboard', 'countries']);
  }
}
