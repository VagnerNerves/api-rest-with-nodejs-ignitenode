import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Runing!')
  })
