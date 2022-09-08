import { createRouter } from "./context";
import { OpenAPI, DistrictService } from "tba-api-v3client-ts";
import { districtKeyZod, ifModifiedSinceZod, yearZod } from "../utils/tba_zod";

// Pull TBA key from environment variable and set as header value
OpenAPI.HEADERS = {
  "X-TBA-Auth-Key": process.env.TBA_KEY || "",
};

const districtApiZod = districtKeyZod.merge(ifModifiedSinceZod);

export const tbaDistrictRouter = createRouter()
  .query("getDistrictsByYear", {
    input: yearZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await DistrictService.getDistrictsByYear(
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getDistrictEvents", {
    input: districtApiZod,
    async resolve({ input }) {
      return await DistrictService.getDistrictEvents(
        input.districtKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getDistrictEventsSimple", {
    input: districtApiZod,
    async resolve({ input }) {
      return await DistrictService.getDistrictEventsSimple(
        input.districtKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getDistrictEventsKeys", {
    input: districtApiZod,
    async resolve({ input }) {
      return await DistrictService.getDistrictEventsKeys(
        input.districtKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getDistrictTeams", {
    input: districtApiZod,
    async resolve({ input }) {
      return await DistrictService.getDistrictTeams(
        input.districtKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getDistrictTeamsSimple", {
    input: districtApiZod,
    async resolve({ input }) {
      return await DistrictService.getDistrictTeamsSimple(
        input.districtKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getDistrictTeamsKeys", {
    input: districtApiZod,
    async resolve({ input }) {
      return await DistrictService.getDistrictTeamsKeys(
        input.districtKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getDistrictRankings", {
    input: districtApiZod,
    async resolve({ input }) {
      return await DistrictService.getDistrictRankings(
        input.districtKey,
        input.ifModifiedSince
      );
    },
  });
