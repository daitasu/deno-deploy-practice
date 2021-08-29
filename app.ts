import { createApp } from "./routes_greet.ts";

const port = 8080;
const app = createApp();

console.log(`listen on: ${port}`);
await app.listen({ port });
