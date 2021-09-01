import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fieldComponent } from './field/field.component';
import { subjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  { path: '', redirectTo:'subjects', pathMatch: 'full' },
  { path: 'subjects', component: subjectsComponent},
  { path: 'field', component: fieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
