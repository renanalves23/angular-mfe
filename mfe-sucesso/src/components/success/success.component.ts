import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'success-component',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  message: string = '';

  @Input() userName: string = '';
  @Input() userEmail: string = '';

  ngOnInit(): void {
    this.handleInit();
  }

  handleInit() {
    this.message = `Olá, ${this.userName}! Seu e-mail ${this.userEmail} foi cadastrado com sucesso.`;
  }
}
