import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { SuccessComponent } from 'src/components/success/success.component';

@NgModule({
  declarations: [
    SuccessComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SuccessComponent,
  ]
})
export class ComponentsModule { }
