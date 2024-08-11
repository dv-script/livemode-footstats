import { ApiTeamRepository } from "@/repositories/api/api-team.repository";
import { FetchChampionshipTableUseCase } from "../fetch-championship-table.usecase";
import { ApiClassificationsRepository } from "@/repositories/api/api-classification.repository";

export function makeFetchChampionshipTableUseCase() {
  const apiTeamRepository = new ApiTeamRepository();
  const apiClassificationsRepository = new ApiClassificationsRepository();

  return new FetchChampionshipTableUseCase(
    apiTeamRepository,
    apiClassificationsRepository
  );
}
