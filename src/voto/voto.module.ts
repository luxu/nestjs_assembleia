import { Module } from '@nestjs/common';
import { VotoController } from './voto.controller';
import { DataBaseModule } from 'src/database/database.module';
import { PautasModule } from 'src/pautas/pautas.module';
import { votoProviders } from './voto.providers';
import { VotoService } from './voto.service';
import { AssociadoService } from './associado/associado.service';
import { ResultadoController } from './resultado/resultado.controller';

@Module({
  controllers: [VotoController, ResultadoController],
  imports: [DataBaseModule, PautasModule],
  providers: [...votoProviders, VotoService, AssociadoService],
})
export class VotoModule {}
