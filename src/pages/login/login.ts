///<reference path="../../../node_modules/ionic-angular/navigation/nav-controller.d.ts"/>
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;
  status: string;

  apiUrl = 'http://media.mw.metropolia.fi/wbma/';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public mediaProvider: MediaProvider,
              public http: HttpClient) {
  }

  public login() {
     const body = {
       username: this.username,
       password: this.password
     };

     const settings = {
       headers: new HttpHeaders().set('Content-type', 'application/json')
     };

     this.http.post(this.apiUrl + 'login', body, settings).subscribe(response => {
       console.log(response['token']);
       localStorage.setItem('token', response['token']);
       this.navCtrl.setRoot(HomePage);
     }, (error: HttpErrorResponse) => {
       console.log(error.statusText);
       this.status = error.error.message;
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
