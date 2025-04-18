import { idlFactory } from "../../../../declarations/OpenWSL_backend";
import { ActorFactory } from "../../utils/ActorFactory";
import { isError } from "../utils/helpers";
import type {
  FixtureDTO,
  RequestFixturesDTO,
} from "../../../../declarations/OpenWSL_backend/OpenWSL_backend.did";

export class FixtureService {
  private actor: any;

  constructor() {
    this.actor = ActorFactory.createActor(
      idlFactory,
      process.env.OPENWSL_BACKEND_CANISTER_ID,
    );
  }

  async getPostponedFixtures(): Promise<FixtureDTO[]> {
    const result = await this.actor.getPostponedFixtures();
    if (isError(result)) throw new Error("Failed to fetch postponed fixtures");
    return result.ok;
  }

  async getFixtures(seasonId: number): Promise<FixtureDTO[]> {
    let dto: RequestFixturesDTO = {
      leagueId: 2,
      seasonId: seasonId,
    };
    const result = await this.actor.getFixtures(dto);
    if (isError(result)) throw new Error("Failed to fetch fixtures");
    return result.ok;
  }
}
