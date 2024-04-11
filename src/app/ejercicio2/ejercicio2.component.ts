import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  descripcion:string='';
  codigo:number=0;
  costo:number=0;
  venta:number=0;
  stock:number=0;

  comprobar():void{
    if (this.costo > 0 && this.venta > 0 && this.stock > 0) {
      console.log('Producto dado de alta');
    }
  }
}
