export interface IDispositivo {
  id: number;
  marca: string;
  modello: string;
  memoria: number;
  colore: string;
  tipo: 'notebook' | 'smartphone' | 'tablet';
  inventario: string;
  stato: 'disponibile' | 'in prestito' | 'in manutenzione';

}
