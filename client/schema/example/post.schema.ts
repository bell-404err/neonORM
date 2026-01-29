// Example post model schema definition
// Use createModel() helper to get full TypeScript type inference and autocomplete
// Each field maps to a database column with type, constraints, and defaults

import { createModel } from '@client/helpers/index.js';

export const postModelExample = createModel({
  id: { type: 'uuid', default: 'uuidv7()' },
  title: { type: 'text', length: 100 },
  description: { type: 'text', length: 255 },
});
