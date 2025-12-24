import type { AuthEntity } from '../entities/auth.entity'

export interface AuthRepository {
  signIn(matricula: string, pin: number): Promise<AuthEntity>
}
