import { Card } from "@/components/ui/card";
import { Trophy, Crown, Star } from "lucide-react";

const TrophyCabinet = () => {
  const championships = [
    {
      year: 2012,
      title: "IPL Champions 2012",
      captain: "Gautam Gambhir",
      final: "Defeated Chennai Super Kings",
      description: "KKR's maiden IPL title victory at home in Eden Gardens",
    },
    {
      year: 2014,
      title: "IPL Champions 2014",
      captain: "Gautam Gambhir",
      final: "Defeated Kings XI Punjab",
      description: "Second championship win in three years",
    },
  ];

  const runnerUp = {
    year: 2021,
    title: "IPL Runners-up 2021",
    captain: "Eoin Morgan",
    final: "Lost to Chennai Super Kings",
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Crown className="w-16 h-16 text-accent mx-auto mb-4 animate-glow" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
            Trophy Cabinet
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Celebrating our championship legacy
          </p>
        </div>

        {/* Championship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {championships.map((trophy, index) => (
            <Card
              key={trophy.year}
              className="group p-8 bg-card/10 backdrop-blur-sm border-2 border-accent hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-gold animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <Trophy className="w-20 h-20 text-accent mx-auto mb-4 group-hover:animate-float" />
                <h3 className="text-3xl font-bold text-accent mb-2">{trophy.title}</h3>
                <div className="text-4xl font-bold text-primary-foreground">{trophy.year}</div>
              </div>

              <div className="space-y-3 text-primary-foreground/90">
                <p className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Captain:</span> {trophy.captain}
                </p>
                <p className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Final:</span> {trophy.final}
                </p>
                <p className="text-sm italic mt-4 text-primary-foreground/70">
                  {trophy.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Runner-up */}
        <Card className="max-w-2xl mx-auto p-6 bg-card/5 backdrop-blur-sm border border-primary-foreground/20">
          <div className="flex items-center gap-4">
            <Trophy className="w-12 h-12 text-primary-foreground/60" />
            <div className="text-primary-foreground">
              <h3 className="text-xl font-bold mb-1">{runnerUp.title}</h3>
              <p className="text-sm">
                Captain: {runnerUp.captain} | {runnerUp.final}
              </p>
            </div>
          </div>
        </Card>

        {/* Victory Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-accent italic">
            "Korbo Lorbo Jeetbo Re - We Will Do, Fight, and Win"
          </blockquote>
          <p className="text-primary-foreground/80 mt-2">- The KKR Spirit</p>
        </div>
      </div>
    </section>
  );
};

export default TrophyCabinet;
