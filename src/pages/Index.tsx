import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SquadSection from "@/components/SquadSection";
import MatchSchedule from "@/components/MatchSchedule";
import StatsSection from "@/components/StatsSection";
import TrophyCabinet from "@/components/TrophyCabinet";
import NewsSection from "@/components/NewsSection";
import Gallery from "@/components/Gallery";
import FanZone from "@/components/FanZone";
import StadiumSection from "@/components/StadiumSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <SquadSection />
      <MatchSchedule />
      <StatsSection />
      <TrophyCabinet />
      <NewsSection />
      <Gallery />
      <FanZone />
      <StadiumSection />
      <Footer />
    </div>
  );
};

export default Index;
