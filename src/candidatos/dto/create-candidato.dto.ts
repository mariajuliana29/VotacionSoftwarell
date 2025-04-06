import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateCandidatoDto {

    // Atributos de la clase
    @IsNumber()
    id_candidato: number;

    @IsNumber() 
    id_alumno: number;


  
    // Constructor de la clase
    // constructor(nombre: string, apellido: string, partido: string, foto: string, votos: number, id_candidato: number) {
    //   this.nombre = nombre;
    //   this.apellido = apellido;
    //   this.partido = partido;
    //   this.foto = foto;
    //   this.votos = votos;
    //   this.id_candidato = id_candidato;
    // }
}
