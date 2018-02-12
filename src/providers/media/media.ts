import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  username: string;
  password: string;

  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  apiUrl = 'http://media.mw.metropolia.fi/wbma/';

  constructor(public http: HttpClient) {
  }

  public login() {

    const body = {
      username: this.username,
      password: this.password
    };

    const settings = {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    };

    return this.http.post(this.apiUrl + 'login', body, settings)
  }

  getMedia(fromIndex: string) {
    return this.http.get(this.apiUrl + 'media', {
      params: {
        start: fromIndex,
        limit: '10'
      }
    });
  }

  getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token',
        localStorage.getItem('token'))
    };
    return this.http.get(this.apiUrl + 'users/user', settings)
  }

  upload(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token')),
    };
    return this.http.post(this.apiUrl + 'media', formData, settings);
  }
}
