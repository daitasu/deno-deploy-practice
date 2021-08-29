import {
  Application,
  Context,
  helpers,
  HttpServerStd,
  Router,
} from "./deps.ts";

export const createApp = (): Application => {
  const app = new Application({
    serverConstructor: HttpServerStd,
  });
  const router = new Router();

  router.get("/greet", (ctx: Context) => {
    const { name = "anonymous" } = helpers.getQuery(ctx);
    ctx.response.body = `Hello ${name}!`;
  });

  app.use(router.routes());
  return app;
};
