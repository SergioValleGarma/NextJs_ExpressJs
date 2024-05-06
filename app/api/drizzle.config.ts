import type { Config } from "drizzle-kit";
export default {
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    database: "test_db",
    user: "postgres",
    password: "1234",
  },
  verbose: true,
  strict: true,
} satisfies Config;