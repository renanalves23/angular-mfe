import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/models/user/user.model';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  title = 'mfe-cadastro';
  form: FormGroup;

  @Output() userForm = new EventEmitter<UserModel>();

  get name() {
    return this.form.get('name');
  }
  
  get email() {
    return this.form.get('email');
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    if (this.form.valid) {
      const user = {
        name: this.form.value.name,
        email: this.form.value.email,
      };
  
      this.userForm.emit(user);
    }
  }
}
