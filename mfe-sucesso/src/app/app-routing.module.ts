import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessPageComponent } from 'src/pages/success/success-page.component';

const succesRoutes: Routes = [
  {
    path: '',
    component: SuccessPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(succesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
