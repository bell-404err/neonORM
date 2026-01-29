// Example user model schema definition
// Use createModel() helper to get full TypeScript type inference and autocomplete
// Each field maps to a database column with type, constraints, and defaults

import { createModel } from '@client/helpers/index.js';

export const userModelExample = createModel({
  id: { type: 'uuid', default: 'uuidv7()' },
  name: { type: 'text', length: 100 },
  email: { type: 'text', length: 255 },
  age: { type: 'integer' },
  isActive: { type: 'boolean', default: true },
  createdAt: { type: 'timestamp', default: 'now' },
});
