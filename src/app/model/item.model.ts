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
// item.model.ts
export interface pawnItem {
  id: string;
  cliente: string;
  articulo: string; // Changed from 'item' to 'articulo' to match your template
  estado: string;
  caracteristicas: string;
  observaciones: string;
  dias: any | null; // Keep this if it's being used
  borrarImagen: boolean;

  // Add the missing properties
  fecha_ingreso: string | null;
  fecha_retiro: string | null;
  fecha_limite: string | null;
  cotizacion: number; // Assuming this is a number
  // Add any other missing properties that are used in your template
}

// Interfaz para el nuevo tipo de ítem
export interface NuevoTipoItem {
  nombre: string;
  icon: string;
  descripcion: string;
  verbosename: string;
  tasa_interes: number;
}

