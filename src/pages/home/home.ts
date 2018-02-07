import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    this.mediaProvider.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;
    });
  }

  thumbnailer(filename: String) {
    const splitFilename = filename.split('.');
    return splitFilename[0] + '-tn640.png';
  };

}
