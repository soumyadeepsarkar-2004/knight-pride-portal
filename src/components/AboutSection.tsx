import { Building, MapPin, Calendar, Crown, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const facts = [
    { icon: Calendar, label: "Founded", value: "2008" },
    { icon: MapPin, label: "Home Ground", value: "Eden Gardens, Kolkata" },
    { icon: Users, label: "Owners", value: "Shah Rukh Khan, Juhi Chawla, Jay Mehta" },
    { icon: Trophy, label: "Championships", value: "2 (2012, 2014)" },
    { icon: Crown, label: "Captain", value: "Shreyas Iyer" },
    { icon: Building, label: "Coach", value: "Chandrakant Pandit" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            About Kolkata Knight Riders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One of the most successful franchises in IPL history, representing the spirit of Kolkata
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-purple transition-all duration-300 hover:scale-105 bg-card border-accent/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-10 text-accent mb-4" />
                <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                <div className="text-lg font-semibold text-foreground">{fact.value}</div>
              </Card>
            );
          })}
        </div>

        {/* Fun Fact */}
        <Card className="p-8 bg-gradient-hero text-primary-foreground max-w-3xl mx-auto border-0 shadow-gold">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Crown className="w-6 h-6 text-accent" />
            Did You Know?
          </h3>
          <p className="text-lg">
            Eden Gardens is the largest cricket stadium in India by seating capacity (68,000) and has witnessed some of the most memorable KKR victories. The team's motto "Korbo Lorbo Jeetbo Re" translates to "We will do, fight, and win" in Bengali, embodying the fighting spirit of the team and the city.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
