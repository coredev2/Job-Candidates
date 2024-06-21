import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormComponent } from './candidate-form/candidate-form.component'; // Import components for routing

const routes: Routes = [
  { path: 'candidate-form', component: CandidateFormComponent },
  // Add more routes as needed
  { path: '', redirectTo: '/candidate-form', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
