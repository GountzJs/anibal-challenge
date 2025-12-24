import { setupWorker } from 'msw/browser'
import { handlers as authHandlers } from './auth/handlers'
import { handlers as consultoriosHandlers } from './consultorios/handlers'
import { handlers as turnosHandlers } from './turnos/handlers'

export const worker = setupWorker(...authHandlers, ...consultoriosHandlers, ...turnosHandlers)
