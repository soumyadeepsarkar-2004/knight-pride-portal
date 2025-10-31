export interface TeamStats {
  totalMatches: number;
  matchesWon: number;
  matchesLost: number;
  winPercentage: number;
  championships: number;
  highestTeamScore: string;
  lowestTeamScore: string;
  bestBowlingFigures: string;
}

export const teamStats: TeamStats = {
  totalMatches: 258,
  matchesWon: 128,
  matchesLost: 127,
  winPercentage: 50.2,
  championships: 2,
  highestTeamScore: "250/3 vs RCB (2024)",
  lowestTeamScore: "84/8 vs MI (2008)",
  bestBowlingFigures: "5/17 by Sunil Narine",
};

export interface SeasonPerformance {
  season: string;
  position: number;
  matches: number;
  won: number;
  lost: number;
}

export const seasonPerformance: SeasonPerformance[] = [
  { season: "2024", position: 7, matches: 14, won: 7, lost: 7 },
  { season: "2023", position: 5, matches: 14, won: 7, lost: 7 },
  { season: "2022", position: 7, matches: 14, won: 6, lost: 8 },
  { season: "2021", position: 2, matches: 16, won: 10, lost: 6 },
  { season: "2020", position: 5, matches: 14, won: 7, lost: 7 },
];

export interface TopPerformer {
  name: string;
  stat: string;
  value: number;
}

export const topRunScorers: TopPerformer[] = [
  { name: "Shreyas Iyer", stat: "runs", value: 485 },
  { name: "Nitish Rana", stat: "runs", value: 412 },
  { name: "Venkatesh Iyer", stat: "runs", value: 385 },
  { name: "Andre Russell", stat: "runs", value: 348 },
  { name: "Rinku Singh", stat: "runs", value: 302 },
];

export const topWicketTakers: TopPerformer[] = [
  { name: "Varun Chakaravarthy", stat: "wickets", value: 21 },
  { name: "Mitchell Starc", stat: "wickets", value: 18 },
  { name: "Sunil Narine", stat: "wickets", value: 16 },
  { name: "Andre Russell", stat: "wickets", value: 14 },
  { name: "Harshit Rana", stat: "wickets", value: 12 },
];
