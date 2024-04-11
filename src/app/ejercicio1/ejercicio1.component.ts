import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  email: string='';
  password:string="";
  repeatPassword:string="";

  register(){
    if(this.password !== this.repeatPassword) {
      console.log("Las contraseñas no coinciden");
    } else {
      console.log("Exito al registrar")
    }
  }
}
