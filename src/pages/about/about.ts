import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private geolocation: Geolocation) {

  }
this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});

}
