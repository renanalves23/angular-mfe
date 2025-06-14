import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ComponentsModule } from 'src/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ],
  exports: []
})
export class RegistrationModule {}
