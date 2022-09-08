import { createRouter } from "./context";
import { ListService, OpenAPI } from "tba-api-v3client-ts";
import { ifModifiedSinceZod, teamKeyZod, yearZod } from "../utils/tba_zod";

// Pull TBA key from environment variable and set as header value
OpenAPI.HEADERS = {
  "X-TBA-Auth-Key": process.env.TBA_KEY || "",
};

export const tbaListRouter = createRouter().query(
  "getTeamEventsStatusesByYear",
  {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await ListService.getTeamEventsStatusesByYear(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  }
);
