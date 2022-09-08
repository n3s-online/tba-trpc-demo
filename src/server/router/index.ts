// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { tbaTeamRouter } from "./tba-team";
import { tbaMatchRouter } from "./tba-match";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("tba.team.", tbaTeamRouter)
  .merge("tba.match.", tbaMatchRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
