import { createRouter } from "./context";
import { OpenAPI, TeamService } from "tba-api-v3client-ts";
import {
  eventKeyZod,
  ifModifiedSinceZod,
  mediaTagZod,
  pageNumZod,
  teamKeyZod,
  yearZod,
} from "../utils/tba_zod";

// Pull TBA key from environment variable and set as header value
OpenAPI.HEADERS = {
  "X-TBA-Auth-Key": process.env.TBA_KEY || "",
};

export const tbaTeamRouter = createRouter()
  .query("getTeams", {
    input: pageNumZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeams(input.pageNum, input.ifModifiedSince);
    },
  })
  .query("getTeamsSimple", {
    input: pageNumZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamsSimple(
        input.pageNum,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamsKeys", {
    input: pageNumZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamsKeys(
        input.pageNum,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamsByYear", {
    input: yearZod.merge(pageNumZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamsByYear(
        input.year,
        input.pageNum,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamsByYearSimple", {
    input: yearZod.merge(pageNumZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamsByYearSimple(
        input.year,
        input.pageNum,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamsByYearKeys", {
    input: yearZod.merge(pageNumZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamsByYearKeys(
        input.year,
        input.pageNum,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeam", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeam(input.teamKey, input.ifModifiedSince);
    },
  })
  .query("getTeamSimple", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamSimple(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamYearsParticipated", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamYearsParticipated(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamDistricts", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamDistricts(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamRobots", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamRobots(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEvents", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEvents(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventsSimple", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventsSimple(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventsKeys", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventsKeys(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventsByYear", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventsByYear(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventsByYearSimple", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventsByYearSimple(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventsByYearKeys", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventsByYearKeys(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventMatches", {
    input: teamKeyZod.merge(eventKeyZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventMatches(
        input.teamKey,
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventMatchesSimple", {
    input: teamKeyZod.merge(eventKeyZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventMatchesSimple(
        input.teamKey,
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventMatchesKeys", {
    input: teamKeyZod.merge(eventKeyZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventMatchesKeys(
        input.teamKey,
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventAwards", {
    input: teamKeyZod.merge(eventKeyZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventAwards(
        input.teamKey,
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamEventStatus", {
    input: teamKeyZod.merge(eventKeyZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamEventStatus(
        input.teamKey,
        input.eventKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamAwards", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamAwards(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamAwardsByYear", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamAwardsByYear(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamMatchesByYear", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamMatchesByYear(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamMatchesByYearSimple", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamMatchesByYearSimple(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamMatchesByYearKeys", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamMatchesByYearKeys(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamMediaByYear", {
    input: teamKeyZod.merge(yearZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamMediaByYear(
        input.teamKey,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamMediaByTag", {
    input: teamKeyZod.merge(mediaTagZod).merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamMediaByTag(
        input.teamKey,
        input.mediaTag,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamMediaByTagYear", {
    input: teamKeyZod
      .merge(mediaTagZod)
      .merge(yearZod)
      .merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamMediaByTagYear(
        input.teamKey,
        input.mediaTag,
        input.year,
        input.ifModifiedSince
      );
    },
  })
  .query("getTeamSocialMedia", {
    input: teamKeyZod.merge(ifModifiedSinceZod),
    async resolve({ input }) {
      return await TeamService.getTeamSocialMedia(
        input.teamKey,
        input.ifModifiedSince
      );
    },
  });
