import { useState } from "react";
import { Button } from "@/components/ui/button";
import NewsCard from "./NewsCard";
import { newsItems } from "@/data/news";

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [displayCount, setDisplayCount] = useState(6);

  const categories = ["All", "Match Report", "Transfer", "Interview", "Announcement"];

  const filteredNews = newsItems.filter(
    (news) => selectedCategory === "All" || news.category === selectedCategory
  );

  const displayedNews = filteredNews.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 3);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            News & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest from KKR
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category);
                setDisplayCount(6);
              }}
              className={
                selectedCategory === category
                  ? "bg-primary shadow-purple"
                  : "border-accent/30 hover:border-accent"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedNews.map((news, index) => (
            <div
              key={news.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <NewsCard news={news} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayCount < filteredNews.length && (
          <div className="text-center">
            <Button
              onClick={handleLoadMore}
              size="lg"
              variant="outline"
              className="border-accent hover:border-accent hover:bg-accent/10"
            >
              Load More News
            </Button>
          </div>
        )}

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No news found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
