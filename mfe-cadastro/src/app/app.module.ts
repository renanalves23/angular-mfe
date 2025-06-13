import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
