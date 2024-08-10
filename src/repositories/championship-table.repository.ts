import { ChampionshipTable } from "@/interfaces/championship-table";
import { Classification } from "@/interfaces/classification";
import { Team } from "@/interfaces/team";

export interface ChampionshipTableRepository {
  getChampionshipTable(championshipId: string): Promise<ChampionshipTable[]>;
  getTeams(championshipId: string): Promise<Team[]>;
  getClassifications(championshipId: string): Promise<Classification[]>;
}
