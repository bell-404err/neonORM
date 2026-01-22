import type { DBDriver } from '../../types/driver.js'
import type { DBConnectionConfig } from '../../types/db-connection-config.js';
import { PgDriver } from '../driver-strategies/index.js'
import NeonOrm from '../index.js';

class OrmBootstrap {

  static async bootstrap(driver: string, config: DBConnectionConfig) {
    switch (driver) {
      case 'postgresql':
        const pgDriver = new PgDriver(config);
        await pgDriver.connect()
        return new NeonOrm(pgDriver);
      default:
        throw new Error(`Unknown driver: ${driver}`);
    }
  }
}

export default OrmBootstrap;