import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Album1Page } from '../album1/album1';
import { Artista1Page } from '../artista1/artista1';
import { Tracks1Page } from '../tracks1/tracks1';
import { Tracks11Page } from '../tracks11/tracks11';
import { Comentarios1Page } from '../comentarios1/comentarios1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  album1= Album1Page;
  artista1= Artista1Page;
  tracks1= Tracks1Page;
  comentarios1 = Comentarios1Page;


  constructor(public navCtrl: NavController) {

  }
  clickA1(){
    this.navCtrl.push(this.album1);
  }

  clickN1(){
    this.navCtrl.push(this.artista1);
  }

  clickT1(){
    this.navCtrl.push(this.tracks1);
  }

  clickCo1(){
    this.navCtrl.push(this.comentarios1);
  }

}
