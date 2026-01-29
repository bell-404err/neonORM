// Core type definitions - internal domain types and interfaces
// Defines contracts for drivers, type mappers, validators, and configurations
// These types are used throughout the core layer for type safety

import { PG_SUPPORTER_TYPES } from '@/constants/index.js';

// Database connection configuration interface
// Standardized config structure for database connection parameters
// Used by drivers to establish database connections
export interface IDBConnectionConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

// Database driver interface contract
// Defines the abstraction layer for database operations
// All database drivers must implement connect(), query(), and disconnect()
// Allows swapping database implementations without changing core logic
export interface IDriverContract {
  connect(): Promise<void>;
  query(sql: string, params?: any[]): Promise<any>;
  disconnect(): Promise<void>;
}

// ORM public API contract - defines what operations users can perform
// This interface abstracts the concrete implementation
export interface IORM {
  autoSync(models: any, config: boolean): Promise<void>;
  create(model: string): Promise<any>;
  findOne(model: string): Promise<any>;
  findMany(model: string, id: string): Promise<any>;
  update(model: string, data?: any): Promise<any>;
  delete(model: string, fields?: any): Promise<any>;
  queryBuilder(actions: any): Promise<any>;
}

export type FieldType = (typeof PG_SUPPORTER_TYPES)[keyof typeof PG_SUPPORTER_TYPES];
export interface IColumnDefinition {
  type: FieldType;
  length?: number;
  precision?: number;
  scale?: number;
  primaryKey?: boolean;
  nullable?: boolean;
  default?: string | number | boolean;
  unique?: boolean;
  references?: { table: string; column: string; onDelete?: string };
}
export type TableSchema = Record<string, IColumnDefinition>;

// Type mapper interface for converting object fields into SQL types
// Maps JavaScript/TypeScript types to database-specific SQL column definitions
// Handles defaults, constraints, and type conversions per database dialect
export interface ISchemaParser {
  mapFieldType(fieldName: string, config: IColumnDefinition): string;
}
