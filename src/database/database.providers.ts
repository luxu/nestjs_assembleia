import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const DataBaseProviders: Provider[] = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        // host: 'localhost',
        // port: 3306,
        // username: 'root',
        // password: 'root',
        database: 'db_assembleia.sqlite3',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
