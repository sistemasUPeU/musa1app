export class CursoConductor {
    id_curso_conductor: number;
    nombre_persona:     string;
    nombre_curso:       string;
    f_inicio:           string;
    f_fin:              string;
    estado:             string;
    carnet_c:           string;
    f_caducidad:        string;
    f_emision:          string;
    id_curso:           number;
    id_persona:         number;
}
export class CursoConductorUpdate {
    id_curso_conductor: number;
    carnet_c:           string;
    f_caducidad:        string;
    f_emision:          string;
}
