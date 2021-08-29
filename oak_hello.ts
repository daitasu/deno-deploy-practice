import { Application, Context } from "./deps.ts";

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = "Hello World";
});

const port = 8080;

console.log(`[INFO] listen on: ${port}`);
await app.listen({ port });
