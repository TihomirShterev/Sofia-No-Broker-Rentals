import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {
  
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

  getProfile(): Observable<any> {
    return this.http.get("/users/profile").pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return of(null); })
    );
  }

  logout(): Observable<any> {
    return this.http
    .post("/users/logout", {})
    .pipe(tap(() => this.currentUser = null));
  }
}