// Main ORM class - provides high-level database operations API
// Wraps driver with query builder and schema management
// Methods like create, findOne, findMany, update, delete abstract SQL complexity
// This is the primary interface between client code and database driver

import type { IDriverContract, IORM } from '@/types/index.js';

export class NeonOrm implements IORM {
  driver: IDriverContract;

  constructor(driver: IDriverContract) {
    this.driver = driver;
  }

  public autoSync = async (models: any, config: boolean) => {};

  public create = async (model: string) => {};

  public findOne = async (model: string): Promise<any> => {
    return this.driver.query(`SELECT * FROM ${model};`);
  };

  public findMany = async (model: string, id: string) => {};

  public update = async (model: string, data?: any) => {};

  public delete = async (model: string, fields?: any) => {};

  // This method allows you to create own query using QueryBuilder
  public queryBuilder = async (actions: any) => {};
}
