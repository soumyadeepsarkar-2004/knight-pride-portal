import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Player } from "@/data/players";

interface PlayerCardProps {
  player: Player;
  onClick: () => void;
}

const PlayerCard = ({ player, onClick }: PlayerCardProps) => {
  const getRoleColor = (role: string) => {
    if (role.includes("Batsman")) return "bg-accent text-accent-foreground";
    if (role.includes("Bowler")) return "bg-primary text-primary-foreground";
    if (role.includes("All-Rounder")) return "bg-secondary text-secondary-foreground";
    if (role.includes("Wicket-Keeper")) return "bg-purple-medium text-primary-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-gold"
    >
      {/* Jersey Number Background */}
      <div className="relative h-48 bg-gradient-hero flex items-center justify-center">
        <div className="text-8xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
          {player.jerseyNumber}
        </div>
        <Badge className={`absolute top-4 right-4 ${getRoleColor(player.role)}`}>
          {player.role}
        </Badge>
      </div>

      {/* Player Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
          {player.name}
        </h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{player.nationality}</span>
          <span className="font-semibold text-accent">#{player.jerseyNumber}</span>
        </div>
        {player.matches && (
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Matches: {player.matches}</span>
              {player.runs && <span>Runs: {player.runs}</span>}
              {player.wickets && <span>Wickets: {player.wickets}</span>}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PlayerCard;
