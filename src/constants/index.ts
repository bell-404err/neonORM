// ORM supported types
// Defines available field types that can be used in schema definitions
// Maps to database-specific types through SchemaParser implementations

export const PG_SUPPORTER_TYPES = {
  UUID: 'uuid',
  TEXT: 'text',
  INTEGER: 'integer',
  BOOLEAN: 'boolean',
  TIMESTAMP: 'timestamp',
  DATE: 'date',
  JSONB: 'jsonb',
} as const;
