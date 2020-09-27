import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getSGBoard(): Observable<any> {
    return this.http.get(API_URL + 'sg', { responseType: 'text' });
  }

  getPresBoard(): Observable<any> {
    return this.http.get(API_URL + 'pres', { responseType: 'text' });
  }

  getTresorierBoard(): Observable<any> {
    return this.http.get(API_URL + 'tresorier', { responseType: 'text' });
  }
}