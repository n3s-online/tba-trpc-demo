import { createRouter } from "./context";
import { OpenAPI, MatchService } from "tba-api-v3client-ts";
import { ifModifiedSinceZod, matchKeyZod } from "../utils/tba_zod";

// Pull TBA key from environment variable and set as header value
OpenAPI.HEADERS = {
  "X-TBA-Auth-Key": process.env.TBA_KEY || "",
};

const matchApiZod = matchKeyZod.merge(ifModifiedSinceZod);

export const tbaMatchRouter = createRouter()
  .query("getMatch", {
    input: matchApiZod,
    async resolve({ input }) {
      return await MatchService.getMatch(input.matchKey, input.ifModifiedSince);
    },
  })
  .query("getMatchSimple", {
    input: matchApiZod,
    async resolve({ input }) {
      return await MatchService.getMatchSimple(
        input.matchKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getMatchTimeseries", {
    input: matchApiZod,
    async resolve({ input }) {
      return await MatchService.getMatchTimeseries(
        input.matchKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getMatchZebra", {
    input: matchApiZod,
    async resolve({ input }) {
      return await MatchService.getMatchZebra(
        input.matchKey,
        input.ifModifiedSince
      );
    },
  });
