import type { DBDriver } from '../types/driver.js'

//TODO: I should develop JS-objects into sql raw row 
class NeonOrm {
  driver: DBDriver

  constructor(driver: DBDriver) {
    this.driver = driver;
  }

  test = async(params?: any) => {
    this.driver.query(`CREATE TABLE posts (id UUID PRIMARY KEY DEFAULT uuidv7(), name VARCHAR(255));`)
  }

  find = async(model: string) => {
    return this.driver.query(`SELECT * FROM ${model};`)
  }

  findByID = async(model: string, id: string) => {

  }

  createModel = async(model: string, data?: any) => {
  
  }

  createRecord = async(model: string, fields?: any) => {
    // return this.driver.query(`INSERT INTO ${model} (name) VALUES ('bell');`)
    const result = await this.driver.query(
      `CREATE TABLE ${model} (
        ...fields
      )`
    )
  }
  
  updateModel = async(model: string, id: string, data: any) => {

  }

  updateFields = async(model: string, data?: any) => {

  }

  delete = async(model: string, id: string) => {

  }

}

export default NeonOrm;