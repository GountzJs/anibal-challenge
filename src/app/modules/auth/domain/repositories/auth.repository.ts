import type { AuthEntity } from '../entities/auth.entity'

export interface AuthRepository {
  signIn(email: string, password: string): Promise<AuthEntity>
}
