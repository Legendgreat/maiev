import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

config();

export const options: DataSourceOptions & TypeOrmModuleOptions = {
  type: 'postgres',
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  autoLoadEntities: true,
  synchronize: true,
};
