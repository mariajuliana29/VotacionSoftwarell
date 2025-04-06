import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CandidatosModule } from './candidatos/candidatos.module';

@Module({
  imports: [UsuarioModule, CandidatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// by SANTIAN