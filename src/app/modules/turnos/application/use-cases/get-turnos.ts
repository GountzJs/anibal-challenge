import type { TurnoEntity } from '../../domain/entities/turno.entity'
import type { TurnosRepository } from '../../domain/repositories/turno.repository'

interface GetTurnosRequest {
  id: string
}

export class GetTurnos {
  constructor(private repository: TurnosRepository) {}

  execute({ id }: GetTurnosRequest): Promise<TurnoEntity[]> {
    return this.repository.getTurnos(id)
  }
}
