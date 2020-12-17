import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces';

@Injectable()
export class AuthService {
  
  currentUser: IUser | null;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http
    .post("/users/register", data)
    .pipe(tap((user: IUser) => this.currentUser = user));
  }

  login(data: any): Observable<any> {
    return this.http
    .post("/users/login", data)
    .pipe(tap((user: IUser) => this.currentUser = user));
  }

  // to check and get current user's credentials in the auth.guard.ts
  authenticate(): Observable<any> {
    return this.http
    .get("/users/profile")
    .pipe(tap(((user: IUser) => this.currentUser = user)));
  }

  logout(): Observable<any> {
    return this.http
    .post("/users/logout", {})
    .pipe(tap(() => this.currentUser = null));
  }

}
