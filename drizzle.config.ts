
import { defineConfig } from 'drizzle-kit';
import { config } from './src/core';
export default defineConfig({
  schema: './src/db/schema',
  dialect: 'mysql',
  out: './src/db/migrations',
  dbCredentials: {
    url: config.DB_URL,
  },
  verbose: true,
  strict: true,
});
