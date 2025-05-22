export interface User {
  id: string;
  email: string;
  name: string;
  role: 'fan' | 'organizer' | 'admin' | 'player';
  createdAt: Date;
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  players: Player[];
  matches: Match[];
}

export interface Player {
  id: string;
  name: string;
  role: string;
  teamId: string;
  stats: PlayerStats;
  profileImage?: string;
}

export interface PlayerStats {
  matches: number;
  runs: number;
  wickets: number;
  highestScore: number;
  bestBowling: string;
  centuries: number;
  fifties: number;
}

export interface Match {
  id: string;
  teamA: Team;
  teamB: Team;
  date: Date;
  venue: string;
  overs: number;
  status: 'upcoming' | 'live' | 'completed';
  result?: string;
  scoreA?: Score;
  scoreB?: Score;
  ballByBall: BallEvent[];
  organizer: string; // organizer's user ID
}

export interface Score {
  runs: number;
  wickets: number;
  overs: number;
}

export interface BallEvent {
  over: number;
  ball: number;
  batsman: string;
  bowler: string;
  runs: number;
  isWicket: boolean;
  wicketType?: string;
  commentary?: string;
  timestamp: Date;
}

export interface Reaction {
  userId: string;
  matchId: string;
  type: 'like' | 'cheer' | 'wow' | 'sad';
  timestamp: Date;
}

export interface Poll {
  id: string;
  matchId: string;
  question: string;
  options: PollOption[];
  startTime: Date;
  endTime: Date;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}