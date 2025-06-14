import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { UserModel } from "src/models/user/user.model";

@Component({
    selector: 'success-page-component',
    templateUrl: './success-page.component.html',
  })
export class SuccessPageComponent {

  userName: string = '';
  userEmail: string = '';

  private subscription?: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = window.sharedDataService?.user$.subscribe((user: UserModel) => {
      if (user) {
        this.userName = user.name;
        this.userEmail = user.email;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}