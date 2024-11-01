import { idlFactory } from "../../../../declarations/OpenWSL_backend";
import { ActorFactory } from "../../utils/ActorFactory";
import { isError } from "../utils/helpers";
import type {
  GetWeeklyLeaderboardDTO,
  WeeklyLeaderboardDTO,
} from "../../../../declarations/OpenWSL_backend/OpenWSL_backend.did";

export class WeeklyLeaderboardService {
  private actor: any;

  constructor() {
    this.actor = ActorFactory.createActor(
      idlFactory,
      process.env.OPENWSL_BACKEND_CANISTER_ID,
    );
  }

  async getWeeklyLeaderboard(
    offset: number,
    seasonId: number,
    limit: number,
    gameweek: number,
  ): Promise<WeeklyLeaderboardDTO> {
    let dto: GetWeeklyLeaderboardDTO = {
      offset: BigInt(offset),
      seasonId: seasonId,
      limit: BigInt(limit),
      searchTerm: "",
      gameweek: gameweek,
    };
    const result = await this.actor.getWeeklyLeaderboard(dto);
    if (isError(result)) throw new Error("Failed to fetch countries");
    return result.ok;
  }
}
