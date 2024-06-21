// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // Import AppComponent
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent
    // Other components if applicable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // Other modules if necessary
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }
