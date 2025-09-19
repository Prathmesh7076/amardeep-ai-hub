import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To democratize AI technology and empower organizations to harness its transformative potential for sustainable growth and innovation."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A future where AI enhances human capabilities, drives ethical innovation, and creates positive impact across all sectors of society."
  },
  {
    icon: Heart,
    title: "Values",
    description: "Ethical AI development, transparent communication, continuous learning, and building solutions that benefit humanity."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries through cutting-edge research, practical implementation, and fostering a culture of creative problem-solving."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            About Amardeep
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            The Journey of an <span className="text-gradient">AI Pioneer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From curious technologist to leading AI expert, discover the passion and vision 
            driving transformative innovation in artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Content */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">My Journey</h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                With over a decade of experience in artificial intelligence and emerging technologies, 
                I've dedicated my career to bridging the gap between cutting-edge AI research and 
                practical business applications.
              </p>
              <p>
                My journey began with a fascination for how machines could learn and adapt. This curiosity 
                led me through prestigious institutions and industry-leading companies, where I honed my 
                expertise in machine learning, deep learning, and AI strategy.
              </p>
              <p>
                Today, I work with Fortune 500 companies, startups, and government organizations to 
                implement AI solutions that drive real-world impact. My approach combines technical 
                excellence with strategic thinking, ensuring that AI initiatives deliver measurable value.
              </p>
              <p>
                As a thought leader, I regularly speak at international conferences, contribute to 
                leading publications, and mentor the next generation of AI professionals. My goal is 
                to make AI accessible, ethical, and beneficial for all.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
            <h3 className="text-2xl font-heading font-semibold mb-6">Impact at a Glance</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Speaking Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                <div className="text-sm text-muted-foreground">Value Created</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}