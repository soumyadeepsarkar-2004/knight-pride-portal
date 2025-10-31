import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";
import { Match } from "@/data/matches";
import { toast } from "sonner";

interface MatchCardProps {
  match: Match;
}

const MatchCard = ({ match }: MatchCardProps) => {
  const getStatusColor = (status: string) => {
    if (status === "upcoming") return "bg-accent text-accent-foreground";
    if (status === "completed") return "bg-muted text-muted-foreground";
    if (status === "live") return "bg-destructive text-destructive-foreground animate-pulse";
    return "bg-muted text-muted-foreground";
  };

  const handleSetReminder = () => {
    toast.success("Reminder set!", {
      description: `You'll be notified before KKR vs ${match.opponent}`,
    });
  };

  return (
    <Card className="p-6 hover:shadow-gold transition-all duration-300 hover:scale-102 border-accent/20">
      {/* Match Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            KKR vs {match.opponent}
          </h3>
          <Badge className={getStatusColor(match.status)}>
            {match.status.toUpperCase()}
          </Badge>
        </div>
        {match.status === "completed" && (
          <Trophy className="w-8 h-8 text-accent" />
        )}
      </div>

      {/* Match Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{new Date(match.date).toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          })}</span>
        </div>
        
        {match.time && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{match.time}</span>
          </div>
        )}
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{match.venue}</span>
        </div>
      </div>

      {/* Match Result or Action */}
      {match.status === "completed" ? (
        <div className="bg-muted rounded-lg p-4">
          <p className="font-semibold text-primary mb-2">{match.result}</p>
          {match.score && (
            <p className="text-sm text-muted-foreground">{match.score}</p>
          )}
        </div>
      ) : (
        <Button 
          variant="outline" 
          className="w-full border-accent/30 hover:border-accent hover:bg-accent/10"
          onClick={handleSetReminder}
        >
          Set Reminder
        </Button>
      )}
    </Card>
  );
};

export default MatchCard;
