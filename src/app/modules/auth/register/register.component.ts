import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/service/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //esto es el input

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
  }

  uid = '';

  //creamos una nueva colecciónpara usuarios
  coleccionUsuarios: Usuario[] = [];

  constructor(public servicioAuth: AuthService, public servicioFirestore: FirestoreService) {
  }

  //tomamos nuevos registros y tomamos los resultados
  async registrarse() {
    const credenciales = {
      nombre: this.usuarios.nombre,
      contraseña: this.usuarios.contrasena,
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.contraseña).then(res => {
      alert("se agrego un nuevo usuario con exito")
    })
    .catch(error => alert("Hubo un error la registrarse: (\n"+error));

    const uid = await this.servicioAuth.getUid();

    this.usuarios.uid = uid;

    // Guarda un nuevo usuario
    this.guardarUser();
  }
    async guardarUser(){
      this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios)
      })
      .catch(error =>{
        console.log('Error =>', error)
      })
    }

    async ngOnInit(){
      const uid = await this.servicioAuth.getUid();
      console.log(uid)
    }
  };

