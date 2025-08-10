import type { FastifyInstance } from "fastify";
import { CreateReelDto } from "./reels.types";

const reelsService = (fastify: FastifyInstance) => {
  return {
    getAll: async () => {
      fastify.log.info("Fetching all reels");
      const reels = fastify.transactions.reels.getAll();
      return reels;
    },

    create: async (reelData: CreateReelDto) => {
      fastify.log.info("Creating a new reel");
      const reel = fastify.transactions.reels.create(reelData);
      return reel;
    },
  };
};

export { reelsService };
