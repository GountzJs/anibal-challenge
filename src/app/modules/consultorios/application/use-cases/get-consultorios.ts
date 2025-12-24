import type { ConsultorioEntity } from '../../domain/entities/consultorio.entity'
import type { ConsultoriosRepository } from '../../domain/repositories/consultorios.repository'

export class GetConsultorios {
  constructor(private repository: ConsultoriosRepository) {}

  execute(): Promise<ConsultorioEntity[]> {
    return this.repository.getConsultorios()
  }
}
