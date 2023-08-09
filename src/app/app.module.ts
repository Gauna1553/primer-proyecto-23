import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environments } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //importación de firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //importacion autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage';  //importacion storage

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //importar shared
    SharedModule,
    //importar firebase
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
