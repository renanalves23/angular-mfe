import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from 'src/pages/registration/registration.component';

const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(RegisterRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
