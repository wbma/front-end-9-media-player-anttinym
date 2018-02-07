import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  apiUrl = 'http://media.mw.metropolia.fi/wbma/';

  constructor(public http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + 'media');
  }

}
