// candidate-form.component.ts
import { Component } from '@angular/core';
import { Candidate } from '../models/models/candidate';
import { CandidateService } from '../services/candidate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {
  candidate: Candidate = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    callDate: '',
    startCallTime: '',
    FinishCallTime: '',
    linkedIn: '',
    gitHub: '',
    comment: ''
  };

  constructor(private candidateService: CandidateService) {}

  submitForm(form: NgForm): void {
    console.log('Submitting form:', this.candidate);
    this.candidateService.addOrUpdateCandidate(this.candidate)
      .subscribe({
        next: response => {
          console.log('Candidate added/updated successfully:', response);
          form.resetForm();
        },
        error: error => {
          console.log('Error adding/updating candidate:', error);
          alert('An error occurred. Please try again.');
          form.resetForm();
        }
      });
  }
}
