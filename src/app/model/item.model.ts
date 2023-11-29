// Interfaz para item
export interface Item {
    curp: string;
    item: string;
    specs: string;
    extras: string;
    dias: any;
    cotizacion: any | null;
    imagen: any | null;
  }
// item.model.ts
export interface pawnItem {
    id: string;
    cliente: string;
    item: string;
    estado: string;
    caracteristicas: string;
    observaciones: string;
    dias: any|null;
    cotizacionAutorizada: any | null;
    borrarImagen:boolean;
}

// Interfaz para el nuevo tipo de ítem
export interface NuevoTipoItem {
  nombre: string;
  icon: string;
  descripcion: string;
  verbosename: string;
  tasa_interes: number;
}

