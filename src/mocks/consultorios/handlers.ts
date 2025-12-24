import data from '@/assets/data/consultorios.json'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:3000/consultorios', async ({ request }) => {
    const authorization = request.headers.get('Authorization')

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return HttpResponse.json({ consultorios: data.consultorios }, { status: 200 })
  }),
]
