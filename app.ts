import { createApp } from "./routes.ts";

const port = 8080;
const app = createApp();

console.log(`listen on: ${port}`);
await app.listen({ port });
