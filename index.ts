import OrmBootstrap from './src/core/orm-bootstrap/index.js'
import type { DBConnectionConfig } from './src/types/db-connection-config.js';


const dbConfig: DBConnectionConfig = {
  host: 'localhost',
  port: 5444,
  user: 'neonORM',
  password: 'neonORM',
  database: 'neonORM',
}

const neonORM = await OrmBootstrap.bootstrap('postgresql', dbConfig);

async function main(dbConfig: DBConnectionConfig) {

  try {
    await neonORM.createModel('users')
    const users = await neonORM.find('users')
    console.log('Users:', users)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }

}

main(dbConfig);

process.on('SIGINT', async () => {
  await neonORM.driver.disconnect();
  process.exit(0);
});