import { http, HttpResponse } from 'msw'
import { SignInBodyValidation } from './validations/sign-in-body.validation'

export const handlers = [
  http.post('http://localhost:3000/auth/sign-in', async ({ request }) => {
    const req = await request.clone().json()

    if (!req) {
      return HttpResponse.json({ errors: ['No se envio un body válido'] }, { status: 400 })
    }

    const body = req as {
      matricula: string
      pin: string
    }

    const errors = new SignInBodyValidation(body.matricula, body.pin).validate()

    if (errors.length > 0) {
      return HttpResponse.json({ errors }, { status: 400 })
    }

    if (body.matricula === 'error' || body.pin === '123456') {
      return HttpResponse.json(
        { errors: ['La matrícula o el PIN son incorrectos'] },
        { status: 406 },
      )
    }

    return HttpResponse.json(
      {
        token: '1234567890',
      },
      { status: 200 },
    )
  }),
]
