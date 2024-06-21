import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CandidateService } from './candidate.service';
import { HttpHeaders } from '@angular/common/http';
import { Candidate } from '../models/models/candidate';

describe('CandidateService', () => {
  let service: CandidateService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(),provideHttpClientTesting(),CandidateService]
    });
    service = TestBed.inject(CandidateService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addOrUpdateCandidate', () => {
    it('should send a POST request to add or update a candidate', () => {
      const candidate: Candidate = {
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

      // Mock response data from the server
      const mockResponse = { success: true };

      // Make the HTTP POST request
      service.addOrUpdateCandidate(candidate).subscribe(response => {
        expect(response).toEqual(mockResponse); // Assert that the response matches the mock data
      });

      // Assert that the HttpClient.post method was called with the correct URL, data, and headers
      const req = httpTestingController.expectOne('http://localhost:5000/api/candidates');
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(candidate);
      expect(req.request.headers.get('Content-Type')).toEqual('application/json');

      // Respond to the request with mock data
      req.flush(mockResponse);

      // Important: Flush the request to resolve it
      httpTestingController.verify();
    });
  });
});
