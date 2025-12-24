import type { TransferenciaEntity } from '../../domain/entities/transferencia.entity'
import type { TransferenciasRepository } from '../../domain/repositories/transferencias.repository'

export class GetAllTransferencias {
  constructor(private repository: TransferenciasRepository) {}

  execute(): Promise<TransferenciaEntity[]> {
    return this.repository.getAll()
  }
}
