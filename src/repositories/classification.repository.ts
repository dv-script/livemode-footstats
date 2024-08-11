import { Classification } from "@/interfaces/classification";

export interface ClassificationRepository {
  getClassifications(championshipId: number): Promise<Classification[]>;
}
