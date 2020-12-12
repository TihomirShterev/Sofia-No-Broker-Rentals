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
    return this.http.get<IItem[]>(`${apiUrl}/items`);
  }
}
