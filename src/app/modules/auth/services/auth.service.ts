import { Injectable } from '@angular/core';
//servicio de autentificacion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {}

  registrar(nombre: string, contraseña: string) {
    return this.auth.createUserWithEmailAndPassword(nombre,contraseña)
  }
}
