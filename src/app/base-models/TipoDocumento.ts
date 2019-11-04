export interface ApiResponseTipoDocumento {
    TIPODOC: Tipodoc[];
}

export interface Tipodoc {
    ID_TIPO_DOCUMENTO: number;
    NOMBRE_DOCUMENTO:  string;
}
export class TipoDocumento {
    ID_TIPO_DOCUMENTO: number;
    NOMBRE_DOCUMENTO:  string;
}