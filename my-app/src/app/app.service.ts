import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get('/services');
  }

  getUnities() {
    return this.http.get('/unities');
  }

}
