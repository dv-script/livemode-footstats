import { ChampionshipTable } from "@/interfaces/championship-table";
import { ClassificationRepository } from "@/repositories/classification.repository";
import { TeamRepository } from "@/repositories/team.repository";
import { TeamNotFoundError } from "./errors/team-not-found.error";
import { getTeamName } from "@/utils/get-team-name";

interface FetchChampionshipTableUseCaseRequest {
  championshipId: number
}

interface FetchChampionshipTableUseCaseResponse {
  championshipTable: ChampionshipTable[];
}

export class FetchChampionshipTableUseCase {
  constructor(
    private teamRepository: TeamRepository,
    private classificationRepository: ClassificationRepository
  ) {}

  async execute({
    championshipId,
  }: FetchChampionshipTableUseCaseRequest): Promise<FetchChampionshipTableUseCaseResponse> {
    const teams = await this.teamRepository.getTeams(championshipId);
    const classifications =
      await this.classificationRepository.getClassifications(championshipId);

    const championshipTable: ChampionshipTable[] = classifications.map(
      (classification) => {
        const team = teams.find((team) => team.id === classification.idEquipe);

        if (!team) {
          throw new TeamNotFoundError();
        }

        return {
          jogos: classification.jogos,
          vitorias: classification.vitorias,
          empates: classification.empates,
          derrotas: classification.derrotas,
          golsPro: classification.golsPro,
          golsContra: classification.golsContra,
          saldoGols: classification.saldoDeGols,
          pontos: classification.pontos,
          posicao: classification.posicao,
          equipe: classification.equipe,
          aproveitamento: classification.aproveitamento,
          campeonato: classification.campeonato,
          derrotasMandante: classification.derrotasMandante,
          derrotasVisitante: classification.derrotasVisitante,
          empatesMandante: classification.empatesMandante,
          empatesVisitante: classification.empatesVisitante,
          maximoPontosPossivel: classification.maximoPontosPossivel,
          vitoriasMandante: classification.vitoriasMandante,
          vitoriasVisitante: classification.vitoriasVisitante,
          apelidoEquipe: getTeamName(classification.equipe),
          SiglaTime: team.sigla,
          URLlogo: team.urlLogo,
        };
      }
    );

    return { championshipTable };
  }
}
