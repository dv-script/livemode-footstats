import { FastifyInstance } from "fastify";
import { classification } from "./controllers/classification.controller";

export default async function routes(app: FastifyInstance) {
  app.get("/classification/:championshipId", classification);
}
