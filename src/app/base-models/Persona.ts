export interface ApiResponsePersona {
    pers: Per[];
}

export interface Per {
    ID_PERSONA:        number;
    NOMBRE_PERSONA:    string;
    APELLIDO_PATERNO:  string;
    APELLIDO_MATERNO:  string;
    NRO_DOCUMENTO:     string;
    CELULAR:           string;
    ID_TIPO_DOCUMENTO: number;
}
