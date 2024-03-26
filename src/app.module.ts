import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { DataBaseModule } from './database/database.module';
import { PautasModule } from './pautas/pautas.module';
import { VotoModule } from './voto/voto.module';

@Module({
  imports: [UsuarioModule, DataBaseModule, PautasModule, VotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
