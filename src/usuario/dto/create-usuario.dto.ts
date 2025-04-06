import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUsuarioDto  {
    
    @IsNotEmpty()
    nombre : string 

    @IsNotEmpty()
    apellido : string

    @IsNumber()
    curso : number

    @IsNumber()
    id_alumno : number

    @IsNotEmpty()
    foto : string
    

}
