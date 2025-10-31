export interface Match {
  opponent: string;
  date: string;
  venue: string;
  time?: string;
  status: "upcoming" | "completed" | "live";
  result?: string;
  score?: string;
  matchType?: "home" | "away";
}

export const matches: Match[] = [
  {
    opponent: "Mumbai Indians",
    date: "2025-04-15",
    venue: "Eden Gardens, Kolkata",
    time: "7:30 PM IST",
    status: "upcoming",
    matchType: "home",
  },
  {
    opponent: "Chennai Super Kings",
    date: "2025-04-20",
    venue: "M.A. Chidambaram Stadium, Chennai",
    time: "3:30 PM IST",
    status: "upcoming",
    matchType: "away",
  },
  {
    opponent: "Royal Challengers Bangalore",
    date: "2025-04-25",
    venue: "Eden Gardens, Kolkata",
    time: "7:30 PM IST",
    status: "upcoming",
    matchType: "home",
  },
  {
    opponent: "Delhi Capitals",
    date: "2025-05-02",
    venue: "Arun Jaitley Stadium, Delhi",
    time: "7:30 PM IST",
    status: "upcoming",
    matchType: "away",
  },
  {
    opponent: "Rajasthan Royals",
    date: "2025-05-08",
    venue: "Eden Gardens, Kolkata",
    time: "3:30 PM IST",
    status: "upcoming",
    matchType: "home",
  },
  {
    opponent: "Sunrisers Hyderabad",
    date: "2025-05-12",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    time: "7:30 PM IST",
    status: "upcoming",
    matchType: "away",
  },
  {
    opponent: "Punjab Kings",
    date: "2025-05-18",
    venue: "Eden Gardens, Kolkata",
    time: "7:30 PM IST",
    status: "upcoming",
    matchType: "home",
  },
  {
    opponent: "Royal Challengers Bangalore",
    date: "2025-03-28",
    venue: "Eden Gardens, Kolkata",
    result: "Won by 7 wickets",
    score: "KKR 185/3 (18.2) vs RCB 184/6 (20)",
    status: "completed",
    matchType: "home",
  },
  {
    opponent: "Mumbai Indians",
    date: "2025-03-22",
    venue: "Wankhede Stadium, Mumbai",
    result: "Lost by 5 runs",
    score: "KKR 198/7 (20) vs MI 203/5 (20)",
    status: "completed",
    matchType: "away",
  },
  {
    opponent: "Chennai Super Kings",
    date: "2025-03-16",
    venue: "Eden Gardens, Kolkata",
    result: "Won by 8 wickets",
    score: "KKR 172/2 (17.3) vs CSK 171/6 (20)",
    status: "completed",
    matchType: "home",
  },
  {
    opponent: "Delhi Capitals",
    date: "2025-03-10",
    venue: "Eden Gardens, Kolkata",
    result: "Won by 24 runs",
    score: "KKR 215/5 (20) vs DC 191/8 (20)",
    status: "completed",
    matchType: "home",
  },
  {
    opponent: "Sunrisers Hyderabad",
    date: "2025-03-04",
    venue: "Eden Gardens, Kolkata",
    result: "Won by 4 wickets",
    score: "KKR 182/6 (19.1) vs SRH 181/7 (20)",
    status: "completed",
    matchType: "home",
  },
  {
    opponent: "Rajasthan Royals",
    date: "2025-02-28",
    venue: "Sawai Mansingh Stadium, Jaipur",
    result: "Lost by 32 runs",
    score: "KKR 165/9 (20) vs RR 197/5 (20)",
    status: "completed",
    matchType: "away",
  },
  {
    opponent: "Punjab Kings",
    date: "2025-02-22",
    venue: "Punjab Cricket Association Stadium, Mohali",
    result: "Won by 6 wickets",
    score: "KKR 178/4 (18.4) vs PBKS 177/7 (20)",
    status: "completed",
    matchType: "away",
  },
];
