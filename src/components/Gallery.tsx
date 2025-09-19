import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Calendar, MapPin, Users } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Global AI Summit Keynote",
    description: "Delivering keynote on 'The Future of AI in Business' to 5,000+ attendees",
    category: "Speaking",
    date: "January 2024",
    location: "San Francisco, CA",
    imageUrl: "/api/placeholder/600/400",
    attendees: "5,000+"
  },
  {
    id: 2,
    title: "Fortune 500 AI Workshop",
    description: "Leading executive workshop on AI strategy and implementation",
    category: "Workshop",
    date: "March 2024",
    location: "New York, NY",
    imageUrl: "/api/placeholder/600/400",
    attendees: "50"
  },
  {
    id: 3,
    title: "Healthcare AI Panel",
    description: "Panel discussion on AI applications in healthcare diagnostics",
    category: "Panel",
    date: "February 2024",
    location: "Boston, MA",
    imageUrl: "/api/placeholder/600/400",
    attendees: "300"
  },
  {
    id: 4,
    title: "MIT Guest Lecture",
    description: "Guest lecture on machine learning ethics and responsible AI",
    category: "Education",
    date: "April 2024",
    location: "Cambridge, MA",
    imageUrl: "/api/placeholder/600/400",
    attendees: "200"
  },
  {
    id: 5,
    title: "TechCrunch Disrupt",
    description: "Startup pitch judging and AI innovation showcase",
    category: "Event",
    date: "December 2023",
    location: "San Francisco, CA",
    imageUrl: "/api/placeholder/600/400",
    attendees: "10,000+"
  },
  {
    id: 6,
    title: "World Economic Forum",
    description: "AI governance roundtable with global leaders",
    category: "Roundtable",
    date: "January 2024",
    location: "Davos, Switzerland",
    imageUrl: "/api/placeholder/600/400",
    attendees: "100"
  },
  {
    id: 7,
    title: "Corporate Innovation Lab",
    description: "Behind-the-scenes from AI research and development",
    category: "Behind the Scenes",
    date: "Ongoing",
    location: "Silicon Valley",
    imageUrl: "/api/placeholder/600/400",
    attendees: "Team"
  },
  {
    id: 8,
    title: "AI Ethics Symposium",
    description: "Leading discussion on ethical AI development practices",
    category: "Symposium",
    date: "March 2024",
    location: "Stanford, CA",
    imageUrl: "/api/placeholder/600/400",
    attendees: "500"
  }
];

const categories = ["All", "Speaking", "Workshop", "Panel", "Education", "Event", "Roundtable", "Behind the Scenes", "Symposium"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Gallery & Events
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Moments from the <span className="text-gradient">AI Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A visual journey through speaking engagements, workshops, industry events, 
            and behind-the-scenes moments in AI innovation and thought leadership.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover-lift overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-black/80 text-white border-0">
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading font-semibold text-sm mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Badge className="mb-4">{item.category}</Badge>
                    <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Load More */}
        {filteredItems.length > 8 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Photos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}