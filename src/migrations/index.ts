import * as migration_20250516_102525 from './20250516_102525';
import * as migration_20250516_142147 from './20250516_142147';

export const migrations = [
  {
    up: migration_20250516_102525.up,
    down: migration_20250516_102525.down,
    name: '20250516_102525',
  },
  {
    up: migration_20250516_142147.up,
    down: migration_20250516_142147.down,
    name: '20250516_142147'
  },
];
