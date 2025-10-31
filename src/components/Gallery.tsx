import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Camera, Users, Trophy, Flame } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { name: "All", icon: Camera },
    { name: "Match Highlights", icon: Trophy },
    { name: "Training", icon: Flame },
    { name: "Fan Moments", icon: Users },
  ];

  // Placeholder images with categories
  const images = [
    { id: 1, category: "Match Highlights", caption: "Victory celebration at Eden Gardens" },
    { id: 2, category: "Training", caption: "Pre-season training camp" },
    { id: 3, category: "Fan Moments", caption: "Purple army in full force" },
    { id: 4, category: "Match Highlights", caption: "Andre Russell's power hitting" },
    { id: 5, category: "Training", caption: "Team strategy session" },
    { id: 6, category: "Fan Moments", caption: "Young fans showing support" },
    { id: 7, category: "Match Highlights", caption: "Championship winning moment 2014" },
    { id: 8, category: "Training", caption: "Bowling practice session" },
    { id: 9, category: "Fan Moments", caption: "Eden Gardens atmosphere" },
  ];

  const filteredImages = images.filter(
    (img) => selectedCategory === "All" || img.category === selectedCategory
  );

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing memorable moments in purple and gold
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={
                  selectedCategory === category.name
                    ? "bg-primary shadow-purple"
                    : "border-accent/30 hover:border-accent"
                }
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid animate-scale-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-accent transition-all duration-300">
                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-bold text-accent/20">KKR</div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedImage !== null && (
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                {selectedImage > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                )}
                
                {selectedImage < filteredImages.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={handleNext}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                )}

                {/* Image */}
                <div className="aspect-video bg-gradient-hero flex items-center justify-center">
                  <div className="text-8xl font-bold text-accent/20">KKR</div>
                </div>

                {/* Caption */}
                <div className="p-6 bg-background">
                  <p className="text-lg font-medium">{filteredImages[selectedImage].caption}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {filteredImages[selectedImage].category}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
