import type {
  ClubDTO,
  FixtureDTO,
} from "../../../../declarations/OpenWSL_backend/OpenWSL_backend.did";
export type FixtureWithTeams = {
  fixture: FixtureDTO;
  homeTeam: ClubDTO | undefined;
  awayTeam: ClubDTO | undefined;
};
