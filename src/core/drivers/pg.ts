// PostgreSQL driver implementation using node-postgres (pg) library
// Implements DBDriver interface to provide connection, query, and disconnect methods
// Handles connection pooling and SQL execution for PostgreSQL databases

import { Pool, type PoolConfig, type QueryResult } from 'pg';
import type { IDriverContract } from '@/types/index.js';

export class PgDriver implements IDriverContract {
  private pool: Pool;
  private config: PoolConfig;

  constructor(config: PoolConfig) {
    this.config = config;
    this.pool = new Pool(config);
  }

  public connect = async (): Promise<void> => {
    const client = await this.pool.connect();
    client.release();
  };

  public query = async (sql: string, params: any[] = []): Promise<QueryResult> => {
    return this.pool.query(sql, params);
  };

  public disconnect = async (): Promise<void> => {
    await this.pool.end();
  };
}
