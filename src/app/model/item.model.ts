// Interfaz para item
export interface Item {
    curp: string;
    item: string;
    specs: string;
    extras: string;
    dias: number;
    cotizacion: number;
}

// Interfaz para el nuevo tipo de ítem
export interface NuevoTipoItem {
  nombre: string;
  icon: string;
  descripcion: string;
  verbosename: string;
  tasa_interes: number;
}
  