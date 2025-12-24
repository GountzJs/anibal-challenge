export const turnoEstado = {
  confirmado: 'CONFIRMADO',
  ausente: 'AUSENTE',
  enAtencion: 'EN_ATENCION',
  finalizado: 'FINALIZADO',
} as const

export type TurnoEstado = (typeof turnoEstado)[keyof typeof turnoEstado]
