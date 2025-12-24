export const turnoTipoConsulta = {
  primeraVez: 'PRIMERA_VEZ',
  control: 'CONTROL',
  urgencia: 'URGENCIA',
} as const

export type TurnoTipoConsulta = (typeof turnoTipoConsulta)[keyof typeof turnoTipoConsulta]
