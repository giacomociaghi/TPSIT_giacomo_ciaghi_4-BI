import { Component } from '@angular/core';
import { IDispositivo } from '../interfaces/i-dispositivo';
import { Dispositivo } from '../classi/dispositivo';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private classe:string = "4Bi Informatica";
  private numeroOre: number = 123;

  private mioDispositivo: IDispositivo = {
    id: 1,
    marca: "Apple",
    modello: "iPhone 14 Pro Max",
    memoria: 256,
    tipo: "smartphone",
    colore: "Nero",
    inventario: "Apple iPhone 14 Pro Max 256GB Nero",
    stato: "disponibile"
  };

  private dispositivo2: Dispositivo =  new Dispositivo(2, "Samsung", "Galaxy S23 Ultra", 512, "Bianco", "smartphone", "in prestito");
}
