import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { UserModel } from 'src/models/user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder,
     private userService: UserService,
     private router: Router) {
  }

  submit(user: UserModel): void {
      this.userService.createUser(user).subscribe({
        next: (createdUser) => {
          this.handleDispatch(createdUser);
          this.router.navigate(['/sucesso']);
        },
        error: (err) => console.error('Error creating user:', err),
      });
  }
  
  handleDispatch(user: UserModel): void {
    window.sharedDataService.setUser(user);
  }

  handleUserForm(user: UserModel): void {
    this.submit(user);
  }
}
