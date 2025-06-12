import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHELL_ROUTES } from 'src/routes/shell.routes';



@NgModule({
  imports: [RouterModule.forRoot(SHELL_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}