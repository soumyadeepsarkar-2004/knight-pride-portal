import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Trophy, Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const StadiumSection = () => {
  const stadiumFacts = [
    { icon: Users, label: "Capacity", value: "68,000" },
    { icon: MapPin, label: "Location", value: "Kolkata, West Bengal" },
    { icon: Calendar, label: "Established", value: "1864" },
    { icon: Trophy, label: "Notable", value: "Largest cricket stadium in India" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Eden Gardens
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The home fortress of Kolkata Knight Riders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Stadium Image Placeholder */}
          <div className="relative overflow-hidden rounded-lg border-2 border-accent/20 group">
            <div className="aspect-video bg-gradient-hero flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent/30 mb-2">Eden Gardens</div>
                <p className="text-primary-foreground/60">Home of Champions</p>
              </div>
            </div>
          </div>

          {/* Stadium Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-accent/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Historic Venue</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Eden Gardens is one of the most iconic cricket stadiums in the world, with a rich history spanning over 150 years. Known for its electrifying atmosphere and passionate crowds, it serves as the perfect home for the Kolkata Knight Riders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The stadium has witnessed some of cricket's greatest moments and continues to be a fortress where KKR thrives, backed by the unwavering support of the purple army.
              </p>
            </Card>

            {/* Key Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stadiumFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 text-center hover:shadow-gold transition-all duration-300 hover:scale-105 border-accent/20 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                    <div className="text-lg font-bold text-foreground">{fact.value}</div>
                  </Card>
                );
              })}
            </div>

            {/* Virtual Tour Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full bg-primary shadow-purple">
                  <Info className="w-5 h-5 mr-2" />
                  Stadium Information
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Eden Gardens - The Cricket Cathedral</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p>
                    <strong className="text-accent">History:</strong> Established in 1864, Eden Gardens is one of the oldest cricket grounds in India and has hosted numerous historic matches including World Cup finals.
                  </p>
                  <p>
                    <strong className="text-accent">Atmosphere:</strong> Known for its passionate crowd, the stadium creates an intimidating environment for visiting teams. The roar of 68,000 fans is truly unforgettable.
                  </p>
                  <p>
                    <strong className="text-accent">KKR Connection:</strong> Since the inception of IPL in 2008, Eden Gardens has been the home ground of Kolkata Knight Riders. The team has won numerous memorable matches here, including championship victories.
                  </p>
                  <p>
                    <strong className="text-accent">Facilities:</strong> The stadium features state-of-the-art facilities, multiple stands, premium hospitality zones, and excellent viewing angles from all sections.
                  </p>
                  <p>
                    <strong className="text-accent">Records:</strong> Eden Gardens holds several records including hosting the highest attendance for a cricket match and being one of the most successful venues for KKR in IPL history.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StadiumSection;
