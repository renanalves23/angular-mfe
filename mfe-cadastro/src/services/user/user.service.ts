import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.API_URL, user);
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.API_URL);
  }
}
