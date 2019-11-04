export interface Vinculacion {
    vinc: Vinc[];
}

export interface Vinc {
    ID_VINCULACION:       number;
    F_EMISION:            string;
    F_TERMINO:            string;
    ID_TIPO_VINCULACION:  number;
    ID_BUS:               null;
    ID_PERSONA_CONDUCTOR: number;
    ESTADO:               string;
}