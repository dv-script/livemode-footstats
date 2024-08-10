import { env } from "@/env";
import axios from "axios";
import https from "https";

export const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${env.API_TOKEN}`,
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});
