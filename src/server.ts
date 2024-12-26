import { fastify } from "fastify";
import { fastifyCors } from "fastify";

const app = fastify()

app.listen({ port: 3333 }).then(() => {
  console.log("the server is running!")
})
