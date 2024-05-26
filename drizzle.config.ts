import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });
export default defineConfig({
  schema: "./lib/user.ts",
  out: "./lib/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL + "",
  },
  verbose: true,
  strict: true,
});
