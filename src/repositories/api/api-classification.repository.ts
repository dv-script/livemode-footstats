import { Classification } from "@/interfaces/classification";
import { api } from "@/lib/axios";
import { ClassificationRepository } from "../classification.repository";

export class ApiClassificationsRepository implements ClassificationRepository {
  async getClassifications(championshipId: number): Promise<Classification[]> {
    const classifications: Classification[] = await api
      .get(`api/1.0/Campeonatos/${championshipId}/classificacao`)
      .then((response) => response.data.data);

    return classifications;
  }
}
