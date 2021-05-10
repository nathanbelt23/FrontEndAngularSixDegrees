export interface Pelicula {
    peliculaID:        number;
    titulo:            string;
    descripcion:       string;
    costoAlquiler:     number;
    cantidadPeliculas: number;
    estrellas:         number;
    urlPelicula:       string;
    fotoPelicula:      null;
    lanzamiento:       Date;
    peliculaAlquiler:  null;
    disponible:       boolean;
    actorlnk:         PeliculaActor[];
    directorLnk:      PeliculaDirector[];
    data:string;
}

export interface PeliculaActor {
    actorDirectorID: number;
    peliculaID:      number;
    actorDirector:   ActorDirector;
}


export interface PeliculaDirector {
    actorDirectorID: number;
    peliculaID:      number;
    actorDirector:   ActorDirector;
}


export interface ActorDirector {
    actorDirectorID:   number;
    nombre:            string;
    esActor:           boolean;
    esDirector:        boolean;
    urlFoto:           string;
    seleccionado:      boolean;
    fotoActorDirector: any;
    data:string;
}

export interface ResponseAPI2 {
    ok:      boolean;
    message: string;
    id:      number;
}

export interface PeliculaAlquiler {
    peliculaAlquilerID: number;
    peliculaID:         number;
    pelicula:           Pelicula;
    userName:           string;
    fechaAlquiler:      Date;
    estadoAquilerID:    number;
    estadoAlquiler:     EstadoAlquiler;
    fechaEntrega:       Date;
    fechaDebeEntregar:  Date;
    fechaCancelacion:   null;
    nombreUsuario  :    string;
}

export interface EstadoAlquiler {
    estadoAquilerID:       number;
    nombre:                string;
    peliculaAlquilerLista: any[];
}