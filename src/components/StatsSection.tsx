import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Target, Award } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { teamStats, seasonPerformance, topRunScorers, topWicketTakers } from "@/data/stats";

const StatsSection = () => {
  const statCards = [
    { icon: Trophy, label: "Total Matches", value: teamStats.totalMatches, color: "text-accent" },
    { icon: TrendingUp, label: "Win Percentage", value: `${teamStats.winPercentage}%`, color: "text-accent" },
    { icon: Award, label: "Championships", value: teamStats.championships, color: "text-accent" },
    { icon: Target, label: "Highest Score", value: teamStats.highestTeamScore, color: "text-accent" },
  ];

  const winLossData = [
    { name: "Won", value: teamStats.matchesWon, color: "#FFD700" },
    { name: "Lost", value: teamStats.matchesLost, color: "#6A1E99" },
  ];

  const teamStrengths = [
    { subject: "Batting", value: 85 },
    { subject: "Bowling", value: 82 },
    { subject: "Fielding", value: 80 },
    { subject: "Death Overs", value: 78 },
    { subject: "Powerplay", value: 84 },
  ];

  return (
    <section id="stats" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Team Statistics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Performance analytics and records
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-gold transition-all duration-300 hover:scale-105 bg-gradient-card border-accent/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Season Performance Line Chart */}
          <Card className="p-6 border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">Season Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={seasonPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="season" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="won" stroke="#FFD700" strokeWidth={2} />
                <Line type="monotone" dataKey="lost" stroke="#6A1E99" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Top Run Scorers Bar Chart */}
          <Card className="p-6 border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">Top Run Scorers (2024)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topRunScorers}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--foreground))" angle={-20} textAnchor="end" height={80} />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Bar dataKey="value" fill="#FFD700" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Win/Loss Pie Chart */}
          <Card className="p-6 border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">Win/Loss Ratio</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={winLossData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {winLossData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Team Strengths Radar Chart */}
          <Card className="p-6 border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">Team Strengths</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={teamStrengths}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" stroke="hsl(var(--foreground))" />
                <PolarRadiusAxis stroke="hsl(var(--foreground))" />
                <Radar name="Strength" dataKey="value" stroke="#FFD700" fill="#FFD700" fillOpacity={0.6} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
