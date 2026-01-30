// This module implements various driver-strategies for working with the database
// Each driver implements the DBDriver interface for database abstraction
// Currently supports PostgreSQL, extensible for other databases

export * from './pg.js';
