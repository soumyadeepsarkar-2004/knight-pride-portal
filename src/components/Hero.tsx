import { Trophy, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { label: "Matches Won", value: "128", icon: TrendingUp },
    { label: "Championships", value: "2", icon: Trophy },
    { label: "Million Fans", value: "50+", icon: Users },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/90 via-purple-dark/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-accent via-gold-light to-accent bg-clip-text text-transparent animate-glow">
            Korbo Lorbo Jeetbo Re
          </h1>
          
          {/* Subheading */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-accent animate-float" />
            <p className="text-xl md:text-2xl text-accent font-semibold">
              Two-time IPL Champions - 2012, 2014
            </p>
            <Trophy className="w-8 h-8 text-accent animate-float" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => handleScrollTo("squad")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-purple"
            >
              View Squad
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => handleScrollTo("matches")}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
            >
              Match Schedule
            </Button>
          </div>

          {/* Stats Ticker */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card/10 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:scale-105 transition-transform duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
