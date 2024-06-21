import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateFormComponent } from './candidate-form.component';
import { CandidateService } from '../services/candidate.service';
import { of, throwError } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';

describe('CandidateFormComponent', () => {
  let component: CandidateFormComponent;
  let fixture: ComponentFixture<CandidateFormComponent>;
  let candidateServiceMock: jest.Mocked<CandidateService>;

  beforeEach(async () => {
    candidateServiceMock = {
      addOrUpdateCandidate: jest.fn()
    } as unknown as jest.Mocked<CandidateService>;

    await TestBed.configureTestingModule({
      declarations: [AppComponent, CandidateFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: CandidateService, useValue: candidateServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should submit the form and call addOrUpdateCandidate', () => {
    const candidateData = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      callDate: '',
      startCallTime: '',
      FinishCallTime: '',
      linkedIn: 'https://www.linkedin.com/in/johndoe',
      gitHub: 'https://github.com/johndoe',
      comment: 'Great candidate!'
    };

    candidateServiceMock.addOrUpdateCandidate.mockReturnValue(of(candidateData));

    component.candidate = candidateData;
    component.submitForm({ resetForm: jest.fn() } as unknown as NgForm);

    expect(candidateServiceMock.addOrUpdateCandidate).toHaveBeenCalledWith(candidateData);
  });

  it('should handle error when adding/updating candidate', () => {
    const candidateData = {
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      email: 'john.doe@example.com',
      callDate: '',
      startCallTime: '',
      FinishCallTime: '',
      linkedIn: 'https://www.linkedin.com/in/johndoe',
      gitHub: 'https://github.com/johndoe',
      comment: 'Great candidate!'
    };

    const errorResponse = new Error('Error adding/updating candidate');
    candidateServiceMock.addOrUpdateCandidate.mockReturnValue(throwError(() => errorResponse));

    component.candidate = candidateData;
    component.submitForm({ resetForm: jest.fn() } as unknown as NgForm);

    expect(candidateServiceMock.addOrUpdateCandidate).toHaveBeenCalledWith(candidateData);
  });
});
