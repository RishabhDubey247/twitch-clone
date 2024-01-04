// db.ts
import { createPool, Pool, PoolConfig } from 'mysql2/promise';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma : PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();

globalThis.prisma = db;
const dbConfig: PoolConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gamehub',
};

const pool: Pool = createPool(dbConfig);

export default {pool,db};
