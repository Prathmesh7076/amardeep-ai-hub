import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Brain, 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Strategy & Consulting",
    description: "Comprehensive AI roadmaps and strategic guidance to transform your business operations and drive competitive advantage.",
    features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Planning"],
    color: "primary"
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models and algorithms designed to solve complex business problems and unlock data-driven insights.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "Innovation Workshops",
    description: "Interactive sessions to identify AI opportunities and develop innovative solutions for your organization.",
    features: ["Design Thinking Sessions", "Prototype Development", "Proof of Concept", "Team Training"],
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "End-to-end transformation programs leveraging AI to modernize processes and enhance customer experiences.",
    features: ["Process Automation", "Data Integration", "Legacy System Modernization", "Performance Optimization"],
    color: "primary"
  },
  {
    icon: Shield,
    title: "AI Ethics & Governance",
    description: "Establish responsible AI practices with comprehensive governance frameworks and ethical guidelines.",
    features: ["Ethics Framework", "Bias Detection", "Compliance Strategy", "Risk Management"],
    color: "secondary"
  },
  {
    icon: Users,
    title: "Executive Training",
    description: "Leadership development programs to build AI literacy and strategic thinking capabilities across your organization.",
    features: ["Executive Briefings", "Strategic Workshops", "Change Management", "AI Leadership"],
    color: "accent"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Services & Specialization
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Comprehensive <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategic consulting to hands-on implementation, I provide end-to-end AI services 
            that drive measurable business impact and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift group cursor-pointer">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${service.color}/10`}>
                  <service.icon className={`h-6 w-6 text-${service.color}`} />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how AI can drive innovation and growth in your organization. 
            Schedule a consultation to explore tailored solutions for your unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-primary">
              Download Service Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}