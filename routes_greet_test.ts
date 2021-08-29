import { createApp } from "./routes_greet.ts";
import { superoak } from "./deps.ts";

const app = createApp();

Deno.test(
  `GET /greet に対して、ステータスコード200で "Hello anonymous!" が返ってくること`,
  async () => {
    const request = await superoak(app);
    await request.get("/greet").expect(200).expect("Hello anonymous!");
  },
);
