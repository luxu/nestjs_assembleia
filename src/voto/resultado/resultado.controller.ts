import { Controller, Get, HttpStatus, Res, Param } from '@nestjs/common';
import { VotoService } from '../voto.service';
import { Response } from 'express';
import { PautasService } from 'src/pautas/pautas.service';
import { ErrorResponse } from 'src/commom/erro.resource';

@Controller('pautas/:id/resultado')
export class ResultadoController {
  constructor(
    private readonly votoService: VotoService,
    private readonly pautasService: PautasService,
  ) {}

  @Get()
  async obterResultado(
    @Param('id') idPauta: string,
    @Res() response: Response,
  ) {
    const pauta = await this.pautasService.findById(idPauta);

    if (!pauta) {
      return response
        .status(HttpStatus.NOT_FOUND)
        .send(new ErrorResponse('Pauta não encontrada!'));
    }

    const result = await this.votoService.obterResultado(pauta);

    if (result.isError()) {
      return response
        .status(result.error.status)
        .send(new ErrorResponse(result.error.message));
    }

    return response.status(HttpStatus.ACCEPTED).send(result.value);
  }
}
