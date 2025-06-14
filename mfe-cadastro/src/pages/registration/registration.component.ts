import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/services/user/user.service";
import { UserModel } from "src/models/user/user.model";

@Component({
    selector: 'registration-component',
    templateUrl: './registration.component.html',
  })
export class RegistrationComponent {

    constructor(
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