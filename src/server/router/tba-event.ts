import { createRouter } from "./context";
import { EventService, OpenAPI } from "tba-api-v3client-ts";
import { eventKeyZod, ifModifiedSinceZod, yearZod } from "../utils/tba_zod";

// Pull TBA key from environment variable and set as header value
OpenAPI.HEADERS = {
  "X-TBA-Auth-Key": process.env.TBA_KEY || "",
};

const yearApiZod = yearZod.merge(ifModifiedSinceZod);
const eventApiZod = eventKeyZod.merge(ifModifiedSinceZod);

export const tbaEventRouter = createRouter()
  .query("getEventsByYear", {
    input: yearApiZod,
    async resolve({ input }) {
      return await EventService.getEventsByYear(
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventsByYearSimple", {
    input: yearApiZod,
    async resolve({ input }) {
      return await EventService.getEventsByYearSimple(
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventsByYearKeys", {
    input: yearApiZod,
    async resolve({ input }) {
      return await EventService.getEventsByYearKeys(
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getEvent", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEvent(input.eventKey, input.ifModifiedSince);
    },
  })
  .query("getEventSimple", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventSimple(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventAlliances", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventAlliances(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventInsights", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventInsights(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventOpRs", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventOpRs(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventPredictions", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventPredictions(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventRankings", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventRankings(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventDistrictPoints", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventDistrictPoints(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventTeams", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventTeams(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventTeamsSimple", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventTeamsSimple(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventTeamsKeys", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventTeamsKeys(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventTeamsStatuses", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventTeamsStatuses(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventMatches", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventMatches(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventMatchesSimple", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventMatchesSimple(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventMatchesKeys", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventMatchesKeys(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventMatchTimeseries", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventMatchTimeseries(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getEventAwards", {
    input: eventApiZod,
    async resolve({ input }) {
      return await EventService.getEventAwards(
        input.eventKey,
        input.ifModifiedSince
      );
    },
  });
