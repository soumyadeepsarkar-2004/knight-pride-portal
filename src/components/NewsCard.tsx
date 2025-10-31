import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { NewsItem } from "@/data/news";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Match Report":
        return "bg-accent text-accent-foreground";
      case "Transfer":
        return "bg-primary text-primary-foreground";
      case "Interview":
        return "bg-secondary text-secondary-foreground";
      case "Announcement":
        return "bg-purple-medium text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-gold transition-all duration-300 hover:scale-102 border-accent/20">
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-hero flex items-center justify-center">
        <div className="text-6xl font-bold text-accent/20">KKR</div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Badge className={getCategoryColor(news.category)}>{news.category}</Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{new Date(news.date).toLocaleDateString()}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-foreground hover:text-accent transition-colors">
          {news.title}
        </h3>

        <p className="text-muted-foreground mb-4">
          {isExpanded ? news.content : news.excerpt}
        </p>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent hover:text-accent hover:bg-accent/10 gap-1"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default NewsCard;
