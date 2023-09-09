import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// http://localhost:333/hello

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Runing!')
  })
