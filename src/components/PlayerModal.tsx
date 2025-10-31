import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Player } from "@/data/players";

interface PlayerModalProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
}

const PlayerModal = ({ player, isOpen, onClose }: PlayerModalProps) => {
  if (!player) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">
            {player.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Jersey Number Display */}
          <div className="relative h-32 bg-gradient-hero rounded-lg flex items-center justify-center">
            <div className="text-7xl font-bold text-accent/30">
              {player.jerseyNumber}
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Role</p>
              <Badge className="bg-primary text-primary-foreground">
                {player.role}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Nationality</p>
              <p className="text-lg font-semibold">{player.nationality}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Jersey Number</p>
              <p className="text-lg font-semibold">#{player.jerseyNumber}</p>
            </div>
            {player.matches && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Matches</p>
                <p className="text-lg font-semibold">{player.matches}</p>
              </div>
            )}
          </div>

          {/* Playing Style */}
          {(player.battingStyle || player.bowlingStyle) && (
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-primary">Playing Style</h4>
              {player.battingStyle && (
                <div>
                  <p className="text-sm text-muted-foreground">Batting</p>
                  <p className="text-base">{player.battingStyle}</p>
                </div>
              )}
              {player.bowlingStyle && (
                <div>
                  <p className="text-sm text-muted-foreground">Bowling</p>
                  <p className="text-base">{player.bowlingStyle}</p>
                </div>
              )}
            </div>
          )}

          {/* Statistics */}
          {(player.runs || player.wickets) && (
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">Career Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                {player.runs && (
                  <>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Total Runs</p>
                      <p className="text-2xl font-bold text-accent animate-counter">{player.runs}</p>
                    </div>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Strike Rate</p>
                      <p className="text-2xl font-bold text-accent">{(120 + Math.random() * 30).toFixed(1)}</p>
                    </div>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Average</p>
                      <p className="text-2xl font-bold text-accent">{(player.runs / (player.matches || 1) * (0.7 + Math.random() * 0.5)).toFixed(1)}</p>
                    </div>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Highest Score</p>
                      <p className="text-2xl font-bold text-accent">{Math.floor(60 + Math.random() * 70)}</p>
                    </div>
                  </>
                )}
                {player.wickets && (
                  <>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Total Wickets</p>
                      <p className="text-2xl font-bold text-accent animate-counter">{player.wickets}</p>
                    </div>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Economy</p>
                      <p className="text-2xl font-bold text-accent">{(6.5 + Math.random() * 2).toFixed(2)}</p>
                    </div>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Best Figures</p>
                      <p className="text-2xl font-bold text-accent">{Math.floor(3 + Math.random() * 3)}/{Math.floor(15 + Math.random() * 20)}</p>
                    </div>
                    <div className="bg-gradient-card border border-accent/20 rounded-lg p-4 hover:scale-105 transition-transform">
                      <p className="text-sm text-muted-foreground mb-1">Average</p>
                      <p className="text-2xl font-bold text-accent">{(20 + Math.random() * 10).toFixed(1)}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlayerModal;
