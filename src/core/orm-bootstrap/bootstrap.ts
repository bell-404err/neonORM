// The factory module that create ORM instance with specific DB driver
// Maps driver types to concrete driver implementations
// Returns configured ORM instance ready for database operations
// SHOULD NOT import from @client - creates circular dependency

import type { IDBConnectionConfig, IORM } from '@/types/index.js';
import { PgDriver } from '@/core/drivers/index.js';
import { NeonOrm } from './orm.js';

type SupportedDrivers = 'postgresql' | 'unknown';

export class OrmBootstrap {
  static async createClient(driver: SupportedDrivers, config: IDBConnectionConfig): Promise<IORM> {
    switch (driver) {
      case 'postgresql': {
        const pgDriver = new PgDriver(config);
        await pgDriver.connect();
        return new NeonOrm(pgDriver);
      }
      default:
        throw new Error(`Unknown driver: ${driver}`);
    }
  }
}
