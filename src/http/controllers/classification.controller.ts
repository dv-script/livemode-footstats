import { makeFetchChampionshipTableUseCase } from "@/use-cases/factories/fetch-championship-table.factory";
import { FastifyRequest, FastifyReply } from "fastify";

export async function classification(
  request: FastifyRequest<{ Params: { championshipId: string } }>,
  reply: FastifyReply
) {
  const fetchChampionshipTableUseCase = makeFetchChampionshipTableUseCase();
  const championshipId = request.params.championshipId;

  const { championshipTable } = await fetchChampionshipTableUseCase.execute({
    championshipId,
  });

  return reply.status(200).send(championshipTable);
}
