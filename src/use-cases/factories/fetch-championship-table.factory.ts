import { FetchChampionshipTableUseCase } from "../fetch-championship-table.usecase";
import { ApiChampionshipTableRepository } from "@/repositories/api/api-championship-table.repository";

export function makeFetchChampionshipTableUseCase() {
  return new FetchChampionshipTableUseCase(new ApiChampionshipTableRepository());
}
