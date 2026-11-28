import { pgTable, serial } from "drizzle-orm/pg-core";

export const items = pgTable("items", {
  id: serial("id").notNull(),
});
