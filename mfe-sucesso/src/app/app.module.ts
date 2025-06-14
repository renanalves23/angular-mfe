import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/components/components.module';
import { SuccessPageModule } from 'src/pages/success/success-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    SuccessPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
