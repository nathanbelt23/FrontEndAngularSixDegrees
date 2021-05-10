export interface UsuarioLogin {
    nombreCompleto: string;
    token:          string;
    email:          string;
    username:       string;
    imagen:         null;
}




export interface ResponseAPI {
    ok:      boolean;
    message: string;
    id:      number;
}



export interface ReporteExcel {
    bookID:      number;
    title:       string;
    description: string;
    pageCount:   number;
    excerpt:     string;
    publishDate: Date;
    firstName:   string;
    lastName:    string;
}
