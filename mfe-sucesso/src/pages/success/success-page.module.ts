import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessPageRoutingModule } from './success-page-routing.module';
import { SuccessPageComponent } from './success-page.component';

@NgModule({
  declarations: [SuccessPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    SuccessPageRoutingModule
  ],
  exports: []
})
export class SuccessPageModule {} 