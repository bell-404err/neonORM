import type { IColumnDefinition } from '@/types/index.js';

export function createModel<T extends Record<string, IColumnDefinition>>(schema: T): T {
  return schema;
}
