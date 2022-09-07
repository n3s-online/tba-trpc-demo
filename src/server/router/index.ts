// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { tbaTeamRouter } from "./tba-team";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("tba.team.", tbaTeamRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
