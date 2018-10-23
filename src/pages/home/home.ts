import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Album1Page } from '../album1/album1';
import { Artista1Page } from '../artista1/artista1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  album1= Album1Page;
  artista1= Artista1Page;


  constructor(public navCtrl: NavController) {

  }
  clickA1 (){
    this.navCtrl.push(this.album1);
  }

  clickN2 (){
    this.navCtrl.push(this.artista1);
  }

}
