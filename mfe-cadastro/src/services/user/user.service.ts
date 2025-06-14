import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly BASE_API_URL = environment.BASE_API_URL;

  constructor(private http: HttpClient) {}

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.BASE_API_URL}/users`, user);
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.BASE_API_URL}/users`);
  }
}
