import type { AuthEntity } from '../../domain/entities/auth.entity'
import type { AuthRepository } from '../../domain/repositories/auth.repository'

interface SignInRequest {
  email: string
  password: string
}

export class SignIn {
  constructor(private repository: AuthRepository) {}

  execute({ email, password }: SignInRequest): Promise<AuthEntity> {
    return this.repository.signIn(email, password)
  }
}
