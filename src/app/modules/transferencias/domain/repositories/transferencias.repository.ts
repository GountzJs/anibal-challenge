import type { TransferenciaEntity } from '../entities/transferencia.entity'

export interface TransferenciasRepository {
  getAll(): Promise<TransferenciaEntity[]>
}
