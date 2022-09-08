import { z } from "zod";

// Value of the `Last-Modified` header in the most recently cached response by the client.
export const ifModifiedSinceZod = z.object({
  ifModifiedSince: z.string().optional(),
});

// Page number of results to return, zero-indexed
export const pageNumZod = z.object({ pageNum: z.number().int().gte(0) });

// Competition Year (or Season). Must be 4 digits.
// extra validation added
export const MIN_FRC_YEAR = 1992;
export const yearZod = z.object({ year: z.number().int().gte(MIN_FRC_YEAR) });

// TBA Team Key, eg `frc254`
// extra validation added
export const teamKeyZod = z.object({
  teamKey: z
    .string()
    .regex(
      new RegExp("^frc[0-9]+$", "i"),
      'team key should be in format of "frcX"'
    ),
});

// TBA Event Key, eg `2016nytr`
// extra validation added
export const eventKeyZod = z.object({
  eventKey: z.string().min(5),
});

// Media Tag which describes the Media.
export const mediaTagZod = z.object({ mediaTag: z.string() });

// TBA Match Key, eg `2016nytr_qm1`
export const matchKeyZod = z.object({ matchKey: z.string().min(6) });

// TBA District Key, eg `2016fim`
export const districtKeyZod = z.object({ districtKey: z.string().min(5) });
