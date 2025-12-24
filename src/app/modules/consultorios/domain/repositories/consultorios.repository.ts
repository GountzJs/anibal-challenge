import type { ConsultorioEntity } from '../entities/consultorio.entity'

export interface ConsultoriosRepository {
  getConsultorios(): Promise<ConsultorioEntity[]>
}
