import { createPool } from 'mysql2';
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from './schema';
import { config } from '../core';

const client = createPool(config.DB_URL);
export const DB: MySql2Database<typeof schema> = drizzle(client, {
  schema: schema,
  mode: 'default',
});
