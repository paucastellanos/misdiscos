import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Album1Page } from '../pages/album1/album1';
import { Artista1Page } from '../pages/artista1/artista1';
import { Tracks1Page } from '../pages/tracks1/tracks1';
import { Comentarios1Page } from '../pages/comentarios1/comentarios1';
import { Artista2Page } from '../pages/artista2/artista2';
import { Album2Page } from '../pages/album2/album2';
import { Tracks2Page } from '../pages/tracks2/tracks2';
import { Comentarios2Page } from '../pages/comentarios2/comentarios2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Album1Page,
    Artista1Page,
    Tracks1Page,
    Comentarios1Page,
    Album2Page,
    Artista2Page,
    Tracks2Page,
    Comentarios2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Album1Page,
    Artista1Page,
    Tracks1Page,
    Comentarios1Page,
    Album2Page,
    Artista2Page,
    Tracks2Page,
    Comentarios2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
