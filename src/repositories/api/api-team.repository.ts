import { Team } from "@/interfaces/team";
import { TeamRepository } from "../team.repository";
import { api } from "@/lib/axios";

export class ApiTeamRepository implements TeamRepository {
  async getTeams(championshipId: number): Promise<Team[]> {
    const teams: Team[] = await api
      .get(`api/1.0/Campeonatos/${championshipId}/Equipes`)
      .then((response) => response.data.data);

    return teams;
  }
}
