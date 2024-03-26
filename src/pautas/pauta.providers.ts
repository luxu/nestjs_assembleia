import { DataSource, Repository } from 'typeorm';
import { Pauta } from './pauta.entity';
import { Provider } from '@nestjs/common';

const pautaRepository: Provider<Repository<Pauta>> = {
  provide: 'PAUTA_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Pauta),
  inject: ['DATA_SOURCE'],
};

export const pautaProviders: Provider[] = [pautaRepository];
