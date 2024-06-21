import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
const routes: Routes = [
  { path: 'candidate-form', component: CandidateFormComponent },
  { path: '', redirectTo: '/candidate-form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
