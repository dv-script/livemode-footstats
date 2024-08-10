import { ChampionshipTable } from "@/interfaces/championship-table";
import { ChampionshipTableRepository } from "@/repositories/championship-table.repository";

interface FetchChampionshipTableUseCaseRequest {
  championshipId: string;
}

interface FetchChampionshipTableUseCaseResponse {
  championshipTable: ChampionshipTable[];
}

export class FetchChampionshipTableUseCase {
  constructor(
    private championshipTableRepository: ChampionshipTableRepository
  ) {}

  async execute({
    championshipId,
  }: FetchChampionshipTableUseCaseRequest): Promise<FetchChampionshipTableUseCaseResponse> {
    const championshipTable =
      await this.championshipTableRepository.getChampionshipTable(
        championshipId
      );

    return {
      championshipTable,
    };
  }
}
