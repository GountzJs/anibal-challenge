import type { TurnoEntity } from '../entities/turno.entity'

export interface TurnosRepository {
  getTurnos(id: string): Promise<TurnoEntity[]>
}
