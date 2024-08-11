import { Team } from "@/interfaces/team";

export interface TeamRepository {
  getTeams(championshipId: number): Promise<Team[]>;
}
