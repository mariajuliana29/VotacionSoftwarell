import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {

    @IsNotEmpty()
    nombre : string 

    @IsNotEmpty()
    apellido : string

    @IsNumber()
    curso : number

    @IsNotEmpty()
    @IsString()
    foto : string
    

}
    