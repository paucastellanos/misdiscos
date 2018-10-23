import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Album1Page } from '../album1/album1';
import { Artista1Page } from '../artista1/artista1';
import { Tracks1Page } from '../tracks1/tracks1';
import { Tracks11Page } from '../tracks11/tracks11';
import { Comentarios1Page } from '../comentarios1/comentarios1';
import { Artista2Page } from '../artista2/artista2';
import { Album2Page } from '../album2/album2';
import { Tracks2Page } from '../tracks2/tracks2';
import { Comentarios2Page } from '../comentarios2/comentarios2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  album1= Album1Page;
  artista1= Artista1Page;
  tracks1= Tracks1Page;
  comentarios1 = Comentarios1Page;
  album2= Album2Page;
  artista2= Artista2Page;
  tracks2= Tracks2Page;
  comentarios2= Comentarios2Page;



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

  clickA2(){
    this.navCtrl.push(this.album2);
  }

  clickN2(){
    this.navCtrl.push(this.artista2);
  }

  clickT2(){
    this.navCtrl.push(this.tracks2);
  }

  clickCo2(){
    this.navCtrl.push(this.comentarios2);
  }
}
