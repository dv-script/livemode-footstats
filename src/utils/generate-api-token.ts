import { env } from "@/env";
import axios, { AxiosResponse } from "axios";
import https from "https";

interface APIToken {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  "not-before-policy": number;
  scope: string;
}

export async function generateApiToken() {
  const CLIENT_ID = env.CLIENT_ID;
  const CLIENT_SECRET = env.CLIENT_SECRET;
  const GRANT_TYPE = "client_credentials";

  const API_TOKEN: AxiosResponse<APIToken> = await axios.post(
    "https://sso.footstats.com.br/auth/realms/i2a-dev/protocol/openid-connect/token",
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: GRANT_TYPE,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
  );

  return API_TOKEN;
}
