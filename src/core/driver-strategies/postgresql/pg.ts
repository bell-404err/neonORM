import { Pool, type PoolConfig, type QueryResult } from 'pg';
import type { DBDriver } from '../../../types/driver.js';


class PgDriver implements DBDriver {
  private pool: Pool;
  private config: PoolConfig;

  constructor(config: PoolConfig) {
    this.config = config;
    this.pool = new Pool();
  }

  async connect(): Promise<void> {
    this.pool = new Pool(this.config);
  }

  async query(sql: string, params: any[] = []): Promise<QueryResult> {
    return this.pool.query(sql, params);
  }

  async disconnect(): Promise<void> {
    await this.pool.end();
  }
}

export default PgDriver;