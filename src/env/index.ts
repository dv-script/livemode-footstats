import "dotenv/config";
import { z } from "zod";

const envSchem = z.object({
  NODE_ENV: z.enum(["dev", "production", "test"]).default("dev"),
  PORT: z.coerce.number().default(3333),
  API_URL: z.string().default("https://gather-api.footstats.com.br/"),
  API_SECRET: z.string({ message: "API_SECRET is required" }),
  CLIENT_SECRET: z.string({ message: "CLIENT_SECRET is required" }),
  CLIENT_ID: z.string({ message: "CLIENT_ID is required" }),
});

const _env = envSchem.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables", _env.error.format());

  throw new Error("Invalid environment variables");
}

export const env = _env.data;
