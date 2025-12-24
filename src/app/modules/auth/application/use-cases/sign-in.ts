import type { AuthEntity } from '../../domain/entities/auth.entity'
import type { AuthRepository } from '../../domain/repositories/auth.repository'

interface SignInRequest {
  matricula: string
  pin: number
}

export class SignIn {
  constructor(private repository: AuthRepository) {}

  execute({ matricula, pin }: SignInRequest): Promise<AuthEntity> {
    return this.repository.signIn(matricula, pin)
  }
}
