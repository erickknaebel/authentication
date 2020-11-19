import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post('http://localhost:3000/api/users/create',
      JSON.stringify(data),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

  login(data: any) {
    return this.http.post('http://localhost:3000/api/users/login',
      JSON.stringify(data),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
