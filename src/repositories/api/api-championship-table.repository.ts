import { Classification } from "@/interfaces/classification";
import { ChampionshipTableRepository } from "../championship-table.repository";
import { api } from "@/lib/axios";
import { ChampionshipTable } from "@/interfaces/championship-table";
import { Team } from "@/interfaces/team";
import { getTeamName } from "@/utils/get-team-name";

export class ApiChampionshipTableRepository
  implements ChampionshipTableRepository
{
  async getClassifications(championshipId: string): Promise<Classification[]> {
    const classifications: Classification[] = await api
      .get(`api/1.0/Campeonatos/${championshipId}/classificacao`)
      .then((response) => response.data.data);

    return classifications;
  }

  async getTeams(championshipId: string): Promise<Team[]> {
    const teams: Team[] = await api
      .get(`api/1.0/Campeonatos/${championshipId}/Equipes`)
      .then((response) => response.data.data);

    return teams;
  }

  async getChampionshipTable(
    championshipId: string
  ): Promise<ChampionshipTable[]> {
    const classifications = await this.getClassifications(championshipId);
    const teams = await this.getTeams(championshipId);

    const championshipTable: ChampionshipTable[] = classifications.map(
      (classification) => {
        const team = teams.find((team) => team.id === classification.idEquipe);

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
          apelidoEquipe: getTeamName(team!.nome),
          SiglaTime: team!.sigla,
          URLlogo: team!.urlLogo,
        };
      }
    );

    return championshipTable;
  }
}
