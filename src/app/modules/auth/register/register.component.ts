import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
  }

  constructor(public servicioAuth: AuthService) {
  }

  //tomamos nuevos registros y tomamos los resultados
  async registrarse() {
    const credenciales = {
      nombre: this.usuarios.nombre,
      contraseña: this.usuarios.contrasena,
    }
    
    const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contraseña).catch(error => {console.log('error =>', error)});
    console.log(res);
  }
}
