export class Dispositivo {
  id: number;
  marca: string;
  modello: string;
  memoria: number;
  colore: string;
  tipo: 'notebook' | 'smartphone' | 'tablet';
  inventario: string;
  stato: 'disponibile' | 'in prestito' | 'manutenzione';

  constructor(id: number, marca: string, modello: string, memoria: number, colore: string, tipo: 'notebook' | 'smartphone' | 'tablet', stato: 'disponibile' | 'in prestito' | 'manutenzione') {
    this.id = id;
    this.marca = marca;
    this.modello = modello;
    this.memoria = memoria;
    this.colore = colore;
    this.tipo = tipo;
    this.stato = stato;
    this.inventario = `${marca} ${modello} ${memoria}GB ${colore}`;
  }
  public toString(): string {
    return `ID: ${this.id}, Marca: ${this.marca}, Modello: ${this.modello}, Memoria: ${this.memoria}GB, Colore: ${this.colore}, Tipo: ${this.tipo}, Inventario: ${this.inventario}, Stato: ${this.stato}`;
  }
}

