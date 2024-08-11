import axios from "axios";
import https from "https";
import { generateApiToken } from "@/utils/generate-api-token";
import { env } from "@/env";

export const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

let CURRENT_TOKEN: string | null = null;
let tokenExpires = 0;

async function refreshToken() {
  const now = Date.now();

  if (now >= tokenExpires) {
    const { data } = await generateApiToken();
    CURRENT_TOKEN = data.access_token;

    const EXPIRES_IN = data.expires_in * 1000;
    tokenExpires = now + EXPIRES_IN - 300 * 1000;
  }
}

api.interceptors.request.use(
  async (config) => {
    await refreshToken();

    if (CURRENT_TOKEN) {
      config.headers.Authorization = `Bearer ${CURRENT_TOKEN}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
