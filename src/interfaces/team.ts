export interface Team {
  isTimeGrande: boolean;
  selecao: boolean;
  nome: string;
  sigla: string;
  tecnico: string;
  cidade: string;
  urlLogo: string;
  torcedorNoSingular: null | string;
  torcedorNoPlural: null | string;
  timeFantasia: boolean;
  sde: {
    equipe_id: number;
  };
  pais: string;
  estado: string;
  estadio: string;
  idTecnico: number;
  id: number;
}
