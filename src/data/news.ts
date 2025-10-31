export interface NewsItem {
  id: string;
  category: "Match Report" | "Transfer" | "Interview" | "Announcement";
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    category: "Match Report",
    title: "KKR Clinches Thrilling Victory Against RCB",
    date: "2025-03-29",
    excerpt: "Andre Russell's explosive innings seals the match in final over with a commanding 7-wicket victory...",
    content: "In a nail-biting encounter at Eden Gardens, Kolkata Knight Riders chased down RCB's competitive total of 184 with seven wickets and 10 balls to spare. Andre Russell's blistering 45* off 18 balls, including 4 sixes, turned the game in KKR's favor. Shreyas Iyer anchored the chase with a composed 67 off 43 balls.",
  },
  {
    id: "2",
    category: "Transfer",
    title: "Mitchell Starc Joins KKR for Record-Breaking Fee",
    date: "2024-12-19",
    excerpt: "KKR management announces the signing of Australian pace ace for IPL 2025 at a historic auction price...",
    content: "Kolkata Knight Riders have secured the services of Mitchell Starc for a record-breaking INR 24.75 crores at the IPL 2025 auction. The left-arm fast bowler brings vast international experience and lethal new-ball bowling to strengthen KKR's pace attack.",
  },
  {
    id: "3",
    category: "Interview",
    title: "Shreyas Iyer: 'We're Aiming for Third Title This Season'",
    date: "2025-03-15",
    excerpt: "KKR captain speaks about team ambitions, squad balance, and his leadership philosophy ahead of IPL 2025...",
    content: "In an exclusive interview, Shreyas Iyer expressed confidence in KKR's chances this season. 'We have a well-balanced squad with experienced match-winners and exciting young talent. Our goal is clear - bring the third title home to Kolkata,' said the captain.",
  },
  {
    id: "4",
    category: "Announcement",
    title: "KKR Announces Partnership with New Title Sponsor",
    date: "2025-02-28",
    excerpt: "Strategic collaboration aims to enhance fan engagement and grassroots cricket development in Bengal...",
    content: "Kolkata Knight Riders have announced a multi-year partnership with a leading sports brand as the team's new title sponsor. The collaboration will focus on fan experiences, youth cricket programs, and community engagement initiatives across West Bengal.",
  },
  {
    id: "5",
    category: "Match Report",
    title: "Sunil Narine's Spin Magic Stuns Delhi Capitals",
    date: "2025-03-11",
    excerpt: "Mystery spinner claims 4 wickets for 22 runs as KKR dominates at home with 24-run victory...",
    content: "Sunil Narine rolled back the years with a vintage spin-bowling performance, picking up 4 crucial wickets to restrict Delhi Capitals to 191. His economical spell in the powerplay and middle overs set up KKR's comfortable 24-run victory at Eden Gardens.",
  },
  {
    id: "6",
    category: "Transfer",
    title: "Young Prodigy Angkrish Raghuvanshi Impresses in Trials",
    date: "2025-01-20",
    excerpt: "19-year-old Mumbai batsman earns KKR contract after outstanding domestic performances...",
    content: "KKR have added promising young batsman Angkrish Raghuvanshi to their squad after his impressive showing in domestic cricket. The right-handed opener scored 350+ runs in the Ranji Trophy and has been identified as a future star by the franchise.",
  },
  {
    id: "7",
    category: "Announcement",
    title: "Eden Gardens Upgrades: Enhanced Fan Experience for IPL 2025",
    date: "2025-02-10",
    excerpt: "Stadium renovations include new seating areas, improved facilities, and state-of-the-art technology...",
    content: "Eden Gardens has undergone significant upgrades ahead of IPL 2025. New features include premium hospitality zones, enhanced sound systems, larger LED screens, and improved crowd management facilities to ensure an unforgettable match-day experience.",
  },
  {
    id: "8",
    category: "Interview",
    title: "Andre Russell: 'Playing for KKR Feels Like Home'",
    date: "2025-03-05",
    excerpt: "Star all-rounder reflects on his journey with the franchise and special bond with Kolkata fans...",
    content: "Andre Russell opened up about his long-standing relationship with KKR. 'The love I receive from Kolkata fans is unmatched. This team has given me some of my best cricket memories, and I'm determined to help bring more glory to the city,' the Jamaican all-rounder stated.",
  },
  {
    id: "9",
    category: "Match Report",
    title: "KKR's Dominant Start: Four Wins in Five Home Games",
    date: "2025-03-30",
    excerpt: "Fortress Eden Gardens proves unbeatable as KKR maintains perfect home record this season...",
    content: "Kolkata Knight Riders have made Eden Gardens a fortress once again, winning four out of five matches at their home ground. The team's dominant performances, backed by passionate fan support, have set the tone for a strong IPL 2025 campaign.",
  },
  {
    id: "10",
    category: "Announcement",
    title: "KKR Foundation Launches Youth Cricket Academy in Bengal",
    date: "2025-01-15",
    excerpt: "Initiative aims to nurture grassroots talent and provide world-class training facilities for aspiring cricketers...",
    content: "The Kolkata Knight Riders Foundation has launched a new cricket academy in partnership with local sports authorities. The academy will offer free coaching to talented young cricketers from underprivileged backgrounds, with opportunities for the best performers to train with KKR professionals.",
  },
];
