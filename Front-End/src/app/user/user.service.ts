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
  currentUser: IUser | null;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(private http: HttpClient) {
  }

  register(data: any): Observable<any> {
    return this.http
    .post(`${apiUrl}/user/register`, data, { withCredentials: true }) // withCredentials won't work at production
    .pipe(tap((user: IUser) => this.currentUser = user));
  }

  login(data: any): Observable<any> {
    return this.http
    .post(`${apiUrl}/user/login`, data, { withCredentials: true })
    .pipe(tap((user: IUser) => this.currentUser = user));
  }

  logout(): Observable<any> {
    return this.http
    .post(`${apiUrl}/user/logout`, {}, { withCredentials: true })
    .pipe(tap(() => this.currentUser = null));
  }
}