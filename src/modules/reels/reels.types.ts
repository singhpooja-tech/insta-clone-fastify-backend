import { z } from "zod";

// Reel create DTO schema
const createReelDtoSchema = z.object({
  video_url: z.string().url(),
  thumbnail_url: z.string().url(),
  caption: z.string().nullable().optional(),
  views: z.number().optional(), // views might be optional on creation
});

// Reel schema (what we get from DB)
const reelSchema = z.object({
  id: z.number(),
  video_url: z.string().url(),
  thumbnail_url: z.string().url(),
  caption: z.string().nullable(),
  views: z.number(),
  created_at: z.string(),
});

export const reelsSchema = z.array(reelSchema);

type CreateReelDto = z.infer<typeof createReelDtoSchema>;
type Reel = z.infer<typeof reelSchema>;

export { createReelDtoSchema, reelSchema, CreateReelDto, Reel };
