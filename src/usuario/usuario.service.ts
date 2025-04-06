import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  // Array para almacenar los usuarios temporalmente
  personas: CreateUsuarioDto[] = [];

  // Función para crear un nuevo usuario
  create(createUsuarioDto: CreateUsuarioDto) {
    // Añade el nuevo usuario al array personas
    this.personas.push(createUsuarioDto);
    // Retorna un mensaje de éxito
    return 'Usuario creado con éxito....';
  }

  // Función para obtener todos los usuarios
  findAll() {
    // Retorna el array completo de usuarios
    return this.personas;
  }

  // Función para obtener un usuario por su id_alumno
  findOne(id: number) {
    // Busca y retorna el usuario cuyo id_alumno coincida con el id proporcionado
    return this.personas.find((item) => item.id_alumno == id);
  }

  // // Función para actualizar un usuario por su id_alumno
  // update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   // Encuentra el índice del usuario en el array personas
  //   const usuarioIndex = this.personas.findIndex(item => item.id_alumno === id);
  //   // Si el usuario no se encuentra, retorna un mensaje de error
  //   if (usuarioIndex == -1) {
  //     return `Usuario con id #${id} no encontrado`;
  //   }
  //   // Actualiza los datos del usuario combinando los datos existentes con los nuevos datos proporcionados
  //   this.personas[usuarioIndex] = { ...this.personas[usuarioIndex], ...updateUsuarioDto };
  //   // Retorna el usuario actualizado
  //   return this.personas[usuarioIndex];
  // }

  update(id_alumno: number, updateUsuarioDto: UpdateUsuarioDto) {
    let pos = this.personas.findIndex((e) => {
      return e.id_alumno == id_alumno;
    });
    if (pos != -1) {
      this.personas[pos].nombre = updateUsuarioDto.nombre;
      this.personas[pos].apellido = updateUsuarioDto.apellido;
      this.personas[pos].curso = updateUsuarioDto.curso;
      this.personas[pos].foto = updateUsuarioDto.foto;
      return this.personas[pos];
    } else return null;
  }

  //   // Función para eliminar un usuario por su id_alumno
  //   remove(id: number) {
  //     // Encuentra el índice del usuario en el array personas
  //     const usuarioIndex = this.personas.findIndex(item => item.id_alumno === id);
  //     // Si el usuario no se encuentra, retorna un mensaje de error
  //     if (usuarioIndex === -1) {
  //       return `Usuario con id #${id} no encontrado`;
  //     }
  //     // Elimina el usuario del array personas
  //     this.personas.splice(usuarioIndex, 1);
  //     // Retorna un mensaje de éxito
  //     return `Usuario con id #${id} eliminado con éxito`;
  //   }

  remove(id_alumno: number) {
    let pos = this.personas.findIndex((e) => {
      return e.id_alumno == id_alumno;
    });
    if (pos != -1) {
      let pers = this.personas[pos];
      this.personas.splice(pos, 1);
      return pers;
    } else return null;
  }
}
