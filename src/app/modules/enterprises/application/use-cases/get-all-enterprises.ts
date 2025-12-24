import type { EnterpriseEntity } from '../../domain/entities/enterprise.entity'
import type { EnterprisesRepository } from '../../domain/repositories/enterprises.repository'

interface GetAllEnterprisesRequest {
  cuit: string
}

export class GetAllEnterprises {
  constructor(private readonly enterprisesRepository: EnterprisesRepository) {}

  execute({ cuit }: GetAllEnterprisesRequest): Promise<EnterpriseEntity[]> {
    return this.enterprisesRepository.getAll(cuit)
  }
}
