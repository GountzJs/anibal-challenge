import type { TurnoEstado } from '../consts/turno-estado.const'
import type { TurnoTipoConsulta } from '../consts/turno-tipo-consulta.const'

export type TurnoEntity = {
  id: string
  hora: string
  paciente: string
  dni: string
  obraSocial: string
  tipoConsulta: TurnoTipoConsulta
  estado: TurnoEstado
}
