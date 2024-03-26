import { Module } from '@nestjs/common';
import { DataBaseProviders } from './database.providers';

@Module({
  providers: [...DataBaseProviders],
  exports: [...DataBaseProviders],
})
export class DataBaseModule {}
