import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const RegisterRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(RegisterRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
