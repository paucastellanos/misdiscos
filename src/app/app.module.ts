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
import { Tracks11Page } from '../pages/tracks11/tracks11';
import { Comentarios1Page } from '../pages/comentarios1/comentarios1';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Album1Page,
    Artista1Page,
    Tracks1Page,
    Comentarios1Page
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
    Comentarios1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
