import { writable } from "svelte/store";
import type { WeeklyLeaderboardDTO } from "../../../../declarations/OpenWSL_backend/OpenWSL_backend.did";
import { WeeklyLeaderboardService } from "$lib/services/weekly-leaderboard-service";

function createWeeklyLeaderboardStore() {
  const { subscribe, set } = writable<WeeklyLeaderboardDTO | null>(null);

  async function getWeeklyLeaderboard(
    seasonId: number,
    gameweek: number,
    page: number,
    offset: number,
  ): Promise<WeeklyLeaderboardDTO | null> {
    return new WeeklyLeaderboardService().getWeeklyLeaderboard(
      offset,
      seasonId,
      page,
      gameweek,
    );
  }

  return {
    subscribe,
    setWeeklyLeaderboard: (leaderboard: WeeklyLeaderboardDTO) =>
      set(leaderboard),
    getWeeklyLeaderboard,
  };
}

export const weeklyLeaderboardStore = createWeeklyLeaderboardStore();
