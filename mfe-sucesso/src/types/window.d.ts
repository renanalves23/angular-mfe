import { Observable } from 'rxjs';
import { UserModel } from 'src/models/user/user.model';

declare global {
  interface Window {
    sharedDataService?: {
      user$: Observable<UserModel>;
      setUser?(user: UserModel): void;
    };
  }
}