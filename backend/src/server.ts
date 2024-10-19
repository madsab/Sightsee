import { ApolloServer } from 'apollo-server-express'
import { UserDB } from './models/user.model'
import express from 'express'
import UserResolver from './resolvers/userResolver'
import AdminResolver from './resolvers/adminResolver'
import adminDB from './models/admin.model'

export const typeDefs = [UserDB, adminDB]
export const resolvers = [UserResolver, AdminResolver]

const startServer = async () => {
  // Because of a type error between express and apollo-server-express, we need to cast express to any
  // Disabling the type check is not recommended, but it is the only way to get rid of the error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const app = express() as any

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await server.start()
  server.applyMiddleware({ app })
  app.listen({ port: 4000 }, () => {
    console.log('\x1b[35m--------------------------------- \n')
    console.log('🚀 Server is running on http://localhost:4000/graphql\n')
    console.log('--------------------------------- \x1b[0m\n')
  })
}

startServer().catch((err) => console.error('Server failed to start', err))
