import { Component } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/cartas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: TarjetaInicio[];

  constructor() {
    this.info = [
      {
        id:1,
        title: "Ninetails V",
        descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium nisi hic ratione asperiores omnis! Dolor sed nobis saepe nihil iusto quibusdam laborum tempora ipsam, blanditiis incidunt odio ea quae!",
        imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/c/c4/latest/20200501123520/Ninetales_V_%28Choque_Rebelde_26_TCG%29.png",
        alt: "",
        rareza:"",
        valor:"",
      },
      {
        id:2,
        title: "Eternatus VMax",
        descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium nisi hic ratione asperiores omnis! Dolor sed nobis saepe nihil iusto quibusdam laborum tempora ipsam, blanditiis incidunt odio ea quae!",
        imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/4/4b/latest/20200806115325/Eternatus_VMAX_%28Oscuridad_Incandescente_117_TCG%29.png",
        alt: "",
        rareza:"",
        valor:"",
      },
      {
        id:3,
        title: "Mewtwo Colección Clasica",
        descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium nisi hic ratione asperiores omnis! Dolor sed nobis saepe nihil iusto quibusdam laborum tempora ipsam, blanditiis incidunt odio ea quae!",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQle-6pz_-IaW61ah__TRJ0bBd_e8J0oBanoQ&usqp=CAU",
        alt: "",
        rareza:"",
        valor:"",
      }
    ]
  }

  ngOnInit(): void{}
}
