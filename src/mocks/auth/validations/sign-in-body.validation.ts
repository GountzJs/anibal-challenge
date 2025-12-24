export class SignInBodyValidation {
  matricula: string
  pin: string

  constructor(matricula: string, pin: string) {
    this.matricula = matricula
    this.pin = pin
  }

  validate(): string[] {
    const errors: string[] = []

    if (!this.matricula) {
      errors.push('La matrícula es obligatoria')
    }
    if (this.matricula.length !== 8) {
      errors.push('La matrícula debe tener 8 caracteres')
    }
    if (!/^[a-zA-Z]\d$/.test(this.matricula)) {
      errors.push('Matrícula inválida solo carácteres alfanuméricos')
    }
    if (!this.pin) {
      errors.push('El PIN es obligatorio')
    }
    if (!/^\d+$/.test(this.pin)) {
      errors.push('El PIN debe contener solo números')
    }
    if (this.pin.length !== 6) {
      errors.push('El PIN debe tener 6 dígitos')
    }
    return errors
  }
}
