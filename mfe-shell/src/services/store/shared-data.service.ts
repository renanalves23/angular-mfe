import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/models/user/user.model';


@Injectable({ providedIn: 'root' })
export class SharedDataService {
  private userSource = new BehaviorSubject<UserModel>({ name: '', email: '' });
  user$ = this.userSource.asObservable();

  setUser(user: UserModel) {
    this.userSource.next(user);
  }
}
