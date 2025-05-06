import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // or your Neon DB host
  port: 5432,
  username: 'your_db_user',
  password: 'your_db_password',
  database: 'your_db_name',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
