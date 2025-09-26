import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Mic, FileText, Award } from "lucide-react";

const mediaItems = [
  {
    type: "interview",
    icon: Mic,
    title: "The Future of AI in Business Strategy",
    outlet: "TechCrunch Podcast",
    date: "March 2024",
    description: "Deep dive into how AI is reshaping business models and strategic planning across industries.",
    url: "https://techcrunch.com/ai-business-strategy-podcast",
    category: "Podcast"
  },
  {
    type: "article",
    icon: FileText,
    title: "Ethical AI: Building Trust in Machine Intelligence",
    outlet: "Harvard Business Review",
    date: "February 2024",
    description: "Comprehensive guide to implementing responsible AI practices in enterprise environments.",
    url: "https://hbr.org/ethical-ai-trust-machine-intelligence",
    category: "Publication"
  },
  {
    type: "video",
    icon: Play,
    title: "AI Transformation Keynote",
    outlet: "Global AI Summit 2024",
    date: "January 2024",
    description: "Keynote presentation on the transformative potential of AI in driving business innovation.",
    url: "https://youtube.com/watch?v=ai-transformation-keynote",
    category: "Speaking"
  },
  {
    type: "interview",
    icon: Mic,
    title: "Machine Learning in Healthcare",
    outlet: "AI Today Podcast",
    date: "December 2023",
    description: "Exploring the revolutionary applications of ML in healthcare diagnostics and patient care.",
    url: "https://aitoday.com/ml-healthcare-interview",
    category: "Podcast"
  },
  {
    type: "article",
    icon: FileText,
    title: "The ROI of AI Implementation",
    outlet: "MIT Technology Review",
    date: "November 2023",
    description: "Data-driven analysis of AI investment returns and implementation best practices.",
    url: "https://technologyreview.com/roi-ai-implementation",
    category: "Publication"
  },
  {
    type: "video",
    icon: Play,
    title: "AI Ethics Panel Discussion",
    outlet: "World Economic Forum",
    date: "October 2023",
    description: "Panel discussion on the ethical implications and governance of artificial intelligence.",
    url: "https://youtube.com/watch?v=ai-ethics-panel-wef",
    category: "Speaking"
  }
];

const achievements = [
  {
    year: "2024",
    title: "AI Thought Leader of the Year",
    organization: "Global Technology Awards",
    description: "Recognized for outstanding contributions to AI thought leadership and industry innovation."
  },
  {
    year: "2023",
    title: "Top 40 Under 40 in AI",
    organization: "Fortune Magazine",
    description: "Listed among the most influential young leaders shaping the future of artificial intelligence."
  },
  {
    year: "2023",
    title: "Innovation Excellence Award",
    organization: "IEEE Computer Society",
    description: "Honored for breakthrough contributions to machine learning and AI applications."
  },
  {
    year: "2022",
    title: "Digital Transformation Leader",
    organization: "CIO Magazine",
    description: "Recognized for leading successful AI-driven digital transformation initiatives."
  }
];

export default function Media() {
  return (
    <section id="media" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Media & Recognition
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Thought Leadership & <span className="text-gradient">Industry Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sharing insights and expertise through leading publications, podcasts, and speaking 
            engagements to advance the AI community and industry knowledge.
          </p>
        </div>

        {/* Media Mentions */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center">
            Recent Media Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <Card key={index} className="hover-lift group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-heading leading-tight">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium">{item.outlet}</span>
                    <span>{item.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Content
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Awards & Recognition
            </h3>
            <p className="text-muted-foreground">
              Industry recognition for contributions to AI innovation and thought leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-heading font-semibold">{achievement.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}