import type { EnterpriseEntity } from '../entities/enterprise.entity'

export interface EnterprisesRepository {
  getAll(cuit: string): Promise<EnterpriseEntity[]>
}
