import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IItem } from "../shared/interfaces";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${apiUrl}/item`);
  }

  getDetails(id: string): Observable<IItem> {
    return this.http.get<IItem>(`${apiUrl}/item/details/${id}`);
  }

  postCreate(data: any): Observable<IItem> {
    return this.http.post<IItem>(`${apiUrl}/item`, data, { withCredentials: true });
  }
}
