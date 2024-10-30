import type { ClubDTO } from "../../../../declarations/OpenWSL_backend/OpenWSL_backend.did";

export interface TeamStats extends ClubDTO {
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}
