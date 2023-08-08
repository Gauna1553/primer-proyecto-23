import { Component } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/modelos' 

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
        title: "",
        descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus praesentium nisi hic ratione asperiores omnis! Dolor sed nobis saepe nihil iusto quibusdam laborum tempora ipsam, blanditiis incidunt odio ea quae!",
        imagen: "https://www.infobae.com/new-resizer/nmkaRNlfRtL4nto0kpHPJ0_0eOg=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/ECZFEITLLRHILCTKM2D5WDDUCU.png",
        alt: "",
        rareza:"",
        valor:"",
      }
    ]
  }

  ngOnInit(): void{}
}
