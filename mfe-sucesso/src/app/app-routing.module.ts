import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const succesRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(succesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
