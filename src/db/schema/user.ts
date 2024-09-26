import { mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),
});
