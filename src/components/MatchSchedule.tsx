import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import MatchCard from "./MatchCard";
import { matches } from "@/data/matches";

const MatchSchedule = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const nextMatch = matches.find(m => m.status === "upcoming");
      if (nextMatch) {
        const matchDate = new Date(nextMatch.date + " " + (nextMatch.time?.split(" ")[0] || "19:30"));
        const now = new Date();
        const diff = matchDate.getTime() - now.getTime();

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          setCountdown(`${days}d ${hours}h ${minutes}m`);
        }
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const filteredMatches = matches.filter((match) => {
    if (filter === "all") return true;
    return match.status === filter;
  });

  return (
    <section id="matches" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Match Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Follow KKR's journey in IPL 2025
          </p>

          {/* Countdown to Next Match */}
          {countdown && (
            <div className="inline-flex items-center gap-4 bg-gradient-hero text-primary-foreground px-10 py-6 rounded-xl shadow-gold animate-pulse-subtle border border-accent/30">
              <Calendar className="w-8 h-8 text-accent animate-bounce" />
              <div>
                <p className="text-sm opacity-90 mb-1">Next Match In</p>
                <div className="flex gap-2">
                  {countdown.split(' ').map((unit, index) => (
                    <div 
                      key={index}
                      className="bg-card/20 backdrop-blur-sm px-3 py-1 rounded-lg animate-flip border border-accent/20"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-2xl font-bold text-accent animate-counter">{unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["all", "upcoming", "completed"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f as any)}
              className={filter === f ? "bg-primary shadow-purple" : "border-accent/30 hover:border-accent"}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match, index) => (
            <div
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <MatchCard match={match} />
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No matches found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MatchSchedule;
