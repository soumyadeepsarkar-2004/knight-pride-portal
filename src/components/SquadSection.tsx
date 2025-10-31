import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PlayerCard from "./PlayerCard";
import PlayerModal from "./PlayerModal";
import { players, Player } from "@/data/players";

const SquadSection = () => {
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = ["All", "Batsman", "Bowler", "All-Rounder", "Wicket-Keeper"];

  const filteredPlayers = players.filter((player) => {
    const matchesRole = selectedRole === "All" || player.role.includes(selectedRole);
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  return (
    <section id="squad" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Squad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the warriors in purple and gold
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Role Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {roles.map((role) => (
              <Button
                key={role}
                variant={selectedRole === role ? "default" : "outline"}
                onClick={() => setSelectedRole(role)}
                className={selectedRole === role ? "bg-primary shadow-purple" : "border-accent/30 hover:border-accent"}
              >
                {role}
              </Button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-accent/30 focus:border-accent"
            />
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player, index) => (
            <div
              key={player.name}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PlayerCard player={player} onClick={() => handlePlayerClick(player)} />
            </div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No players found matching your criteria</p>
          </div>
        )}

        {/* Player Modal */}
        <PlayerModal
          player={selectedPlayer}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default SquadSection;
