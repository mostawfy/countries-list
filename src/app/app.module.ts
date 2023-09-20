import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { SnackbarMessageService } from './services/snackbar-message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IpService } from './services/ip.service';
import { HttpClientModule } from '@angular/common/http';

const materialModules = [
  MatDividerModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materialModules,
  ],
  providers: [SnackbarMessageService, IpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
