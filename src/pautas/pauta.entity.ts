import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Pauta {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ name: 'Descrição' })
  descricao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro?: Date;

  @Column({ type: 'datetime', nullable: true })
  abertura?: Date;

  @Column({ type: 'datetime', nullable: true })
  fechamento?: Date;

  obterStatus(): string {
    if (this.fechamento && this.fechamento < new Date()) {
      return StatusPauta.ENCERRADA;
    } else if (this.abertura) {
      return StatusPauta.INICIADA;
    } else {
      return StatusPauta.NÃO_INICIADA;
    }
  }

  public isFoiIniciada(): boolean {
    return this.isInStatus(StatusPauta.INICIADA);
  }

  public isFoiEncerrada(): boolean {
    return this.isInStatus(StatusPauta.ENCERRADA);
  }

  public isPossivelIniciarSessao(): boolean {
    return this.isInStatus(StatusPauta.NÃO_INICIADA);
  }

  public isInStatus(statusVerificar: StatusPauta): boolean {
    const status = this.obterStatus();
    return status === statusVerificar;
  }
}

enum StatusPauta {
  NÃO_INICIADA = 'Sessão não iniciada',
  INICIADA = 'Sessão iniciada',
  ENCERRADA = 'Pauta Encerrada',
}
