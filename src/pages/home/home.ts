import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from '@angular/common/http';
import {LoginPage} from '../login/login';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  mediaArray: any;
  mediaIndex = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {

    if (localStorage.getItem('token') !==null) {

      this.mediaProvider.getUserData().subscribe(response => {

        this.mediaProvider.getMedia(this.mediaIndex.toString()).subscribe(data => {
          console.log(data);
          this.mediaArray = data;
          this.mediaIndex += 10;
        })
      }, (error: HttpErrorResponse) => {
        console.log(error);
        this.navCtrl.setRoot(LoginPage);
      });
    } else {
      console.log('No token, log in first!');
      this.navCtrl.setRoot(LoginPage)
    }
  }

  loadMore() {
    this.mediaProvider.getMedia(this.mediaIndex.toString()).subscribe((response: Object[]) => {
      this.mediaArray.push(...response);
      this.mediaIndex += 10;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}
