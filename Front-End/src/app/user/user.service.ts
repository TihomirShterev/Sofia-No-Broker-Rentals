import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {
  // isLogged = false;
  currentUser: IUser | null;

  get isLogged(): boolean { return !!this.currentUser; }
  
  // constructor(private storage: StorageService) {
  constructor(private http: HttpClient) {
    // constructor(private storage: StorageService) {
    // this.isLogged = this.storage.getItem("isLogged");
  }

  register(data: any): Observable<any> {
    return this.http
    .post(`${apiUrl}/user/register`, data, { withCredentials: true })
    .pipe(tap((user: IUser) => this.currentUser = user));
  }

  login(data: any): Observable<any> {
    // this.isLogged = true;
    // this.storage.setItem("isLogged", true);
    // return of(data).pipe(delay(3000));
    return this.http
    .post(`${apiUrl}/users/login`, data, { withCredentials: true })
    .pipe(tap((user: IUser) => this.currentUser = user));
  }

  logout(): Observable<any> {
    // this.isLogged = false;
    // this.storage.setItem("isLogged", false);
    // return of(null).pipe(delay(3000));
    return this.http
    .post(`${apiUrl}/users/logout`, {}, { withCredentials: true })
    .pipe(tap(() => this.currentUser = null));;
  }
}
