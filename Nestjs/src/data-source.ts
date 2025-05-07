import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: ['src/products/products.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  ssl: {
    rejectUnauthorized: false,
  },
});
