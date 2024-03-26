import { OpcaoVoto } from '../voto.entity';

export class ResultadoVotacaResource {
  pauta: string;
  abertura: Date;
  fechamento: Date;
  totalVotos: number;
  quantidadeSim: number;
  quantidadeNao: number;
  opcaoGanhadora: OpcaoVoto;
}
