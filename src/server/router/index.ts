// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { tbaTeamRouter } from "./tba-team";
import { tbaMatchRouter } from "./tba-match";
import { tbaDistrictRouter } from "./tba-district";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("tba.district.", tbaDistrictRouter)
  .merge("tba.match.", tbaMatchRouter)
  .merge("tba.team.", tbaTeamRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
