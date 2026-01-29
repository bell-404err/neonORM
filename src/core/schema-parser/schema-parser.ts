// Schema validation and SQL generation module
// Parses field: IColumnDefinition into schemas and converts them to TABLE statements
// Validates schema structure, normalizes field definitions, and maps types
// Handles migrations by comparing old and new schemas (ALTER TABLE generation)

import type { ISchemaParser } from '@/types/index.js';
import type { IColumnDefinition } from '@/types/index.js';
import { toSnakeCase } from '@utils/index.js';

class PgTypeMapper implements ISchemaParser {
  public mapFieldType = (fieldName: string, config: IColumnDefinition): string => {
    const sqlString: string[] = [];

    const columnName = toSnakeCase(fieldName);
    sqlString.push(columnName);
    sqlString.push(config.type.toUpperCase());

    if (config.primaryKey) sqlString.push('PRIMARY KEY');
    if (!config.nullable) sqlString.push('NOT NULL');

    if (config.default !== undefined) {
      sqlString.push('DEFAULT');

      switch (config.default) {
        case 'now':
          sqlString.push('CURRENT_TIMESTAMP');
          break;
        case 'uuidv4':
          sqlString.push('uuidv4()');
          break;
        case 'uuidv7':
          sqlString.push('uuidv7()');
          break;
        default:
          if (typeof config.default === 'string') {
            sqlString.push(`'${config.default}'`);
          } else if (typeof config.default === 'number') {
            sqlString.push(String(config.default));
          } else if (typeof config.default === 'boolean') {
            sqlString.push(String(config.default));
          } else {
            throw new Error('Unknown default value');
          }
      }
    }

    return sqlString.join(' ');
  };
}

export default PgTypeMapper;
