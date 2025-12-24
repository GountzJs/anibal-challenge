import data from '@/assets/data/turnos.json'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:3000/turnos/:id', async ({ request, params }) => {
    const authorization = request.headers.get('Authorization')

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const id = params.id as string

    if (!id || !(id in data.turnos)) {
      return HttpResponse.json(
        { error: 'El consultorio solicitado no se encuentra registrado' },
        { status: 404 },
      )
    }

    const turnos = data.turnos[id as keyof typeof data.turnos]

    return HttpResponse.json({ turnos }, { status: 200 })
  }),
]
