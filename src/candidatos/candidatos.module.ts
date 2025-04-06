import { Module } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CandidatosController } from './candidatos.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [CandidatosController],
  providers: [CandidatosService],
})
export class CandidatosModule {}
