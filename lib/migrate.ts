import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as dotenv from "dotenv";

dotenv.config({ path: "@/.env" });

const postgresHost = process.env.DB_HOST || "localhost";
const postgresPort = process.env.DB_PORT || "5432";

const connectionString = `postgres://postgres:postgres@${postgresHost}:${postgresPort}/drizzle`;
const sql = postgres(connectionString, { max: 1 });
export const db = drizzle(sql);

await migrate(db, { migrationsFolder: "@/drizzle" });
