import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/models/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
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
