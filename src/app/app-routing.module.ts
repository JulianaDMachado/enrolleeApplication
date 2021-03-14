import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolleesComponent } from './components/enrollees/enrollees.component';
import { EnrolleeDetailsComponent } from './components/enrollees/enrollee-details/enrollee-details.component';

const routes: Routes = [
  { path: 'enrollees', component: EnrolleesComponent },
  { path: 'enrollees/:id', component: EnrolleeDetailsComponent},
  { path: '',   redirectTo: 'enrollees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
