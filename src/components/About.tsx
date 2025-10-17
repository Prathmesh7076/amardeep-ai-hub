import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Lightbulb, MapPin, Briefcase, Rocket, Trophy, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To drive digital transformation by leveraging cutting-edge technology solutions that create measurable business value and sustainable competitive advantages for organizations worldwide."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A future where technology seamlessly integrates with business strategy to unlock unprecedented growth, efficiency, and innovation across all industries and markets."
  },
  {
    icon: Heart,
    title: "Values",
    description: "Client-centric excellence, collaborative innovation, continuous learning, and delivering solutions that drive meaningful impact and long-term success."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing emerging technologies, fostering creative problem-solving, and building scalable solutions that adapt to the evolving business needs and market dynamics."
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            The Journey of a <span className="text-gradient">Technology Leader</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            From a technology enthusiast to a senior consultant, discover the journey and expertise 
            driving digital transformation and innovation at a global scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Content */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">My Journey</h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p className="text-lg sm:text-xl leading-relaxed">
                With over 13 years of experience in technology consulting and digital transformation, 
                I've built my career at the intersection of technology innovation and business strategy 
                at Publicis Sapient, one of the world's leading digital transformation companies.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                Currently serving as a Senior Associate (Lead) based in Gurgaon with assignments 
                across the United States, I've had the privilege of working with diverse clients 
                ranging from Fortune 500 enterprises to emerging startups, helping them navigate 
                complex technological challenges and drive measurable business outcomes.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                My journey has taken me across multiple industries and geographies, allowing me to 
                develop a deep understanding of how technology can be leveraged to solve real-world 
                problems. I specialize in architecting scalable solutions, leading cross-functional 
                teams, and translating business requirements into innovative technology implementations.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                As a technology leader, I'm passionate about emerging technologies, particularly AI 
                and machine learning, and their potential to transform how businesses operate. I 
                believe in building solutions that not only meet today's needs but also create 
                a foundation for future growth and innovation.
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
            <h3 className="text-2xl font-heading font-semibold mb-6">Impact at a Glance</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">13+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Client Organizations</div>
              </div>
              <a 
                href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:bg-primary/5 rounded-lg p-2 transition-colors group"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-xl font-bold text-primary">Noida</div>
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Location, India</div>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Timeline */}
        <div className="mb-16">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-center mb-12">
            Professional <span className="text-gradient">Timeline</span>
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Center line - hidden on mobile, visible on tablet+ */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
              
              <div className="space-y-12 md:space-y-16">
                {[
                  {
                    year: "2024 - Present",
                    title: "Senior Associate (Lead)",
                    company: "Publicis Sapient",
                    description: "Leading digital transformation initiatives for Fortune 500 clients across the US markets. Specializing in AI-driven solutions and enterprise architecture.",
                    icon: Rocket,
                    side: "left"
                  },
                  {
                    year: "2020 - 2024",
                    title: "Associate Technology Consultant",
                    company: "Publicis Sapient",
                    description: "Led cross-functional teams in delivering complex technology solutions. Focused on cloud migration and digital innovation projects.",
                    icon: Trophy,
                    side: "right"
                  },
                  {
                    year: "2016 - 2020",
                    title: "Senior Software Engineer",
                    company: "Technology Consulting",
                    description: "Developed scalable software solutions and mentored junior developers. Specialized in full-stack development and system architecture.",
                    icon: Target,
                    side: "left"
                  },
                  {
                    year: "2011 - 2016",
                    title: "Software Engineer",
                    company: "Early Career",
                    description: "Started the journey in software development, building foundational skills in programming and system design.",
                    icon: Briefcase,
                    side: "right"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row items-center">
                    {item.side === 'left' ? (
                      <>
                        {/* Desktop layout - content on left */}
                        <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                          <Card className="hover-lift">
                            <CardContent className="p-6">
                              <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                                {item.year}
                              </Badge>
                              <h4 className="font-heading font-semibold text-lg mb-1">{item.title}</h4>
                              <div className="text-secondary font-medium mb-3">{item.company}</div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                        {/* Icon */}
                        <div className="z-20 flex items-center justify-center bg-gradient-primary shadow-strong w-12 h-12 rounded-full my-4 md:my-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        {/* Spacer for desktop */}
                        <div className="hidden md:block md:w-1/2"></div>
                      </>
                    ) : (
                      <>
                        {/* Spacer for desktop */}
                        <div className="hidden md:block md:w-1/2"></div>
                        {/* Icon */}
                        <div className="z-20 flex items-center justify-center bg-gradient-primary shadow-strong w-12 h-12 rounded-full my-4 md:my-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        {/* Desktop layout - content on right */}
                        <div className="w-full md:w-1/2 md:pl-8 md:text-left mb-4 md:mb-0">
                          <Card className="hover-lift">
                            <CardContent className="p-6">
                              <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                                {item.year}
                              </Badge>
                              <h4 className="font-heading font-semibold text-lg mb-1">{item.title}</h4>
                              <div className="text-secondary font-medium mb-3">{item.company}</div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-center mb-12">Core Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "AI & Machine Learning",
                skills: ["Neural Networks", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "MLOps"]
              },
              {
                category: "Cloud Technologies",
                skills: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Serverless"]
              },
              {
                category: "Enterprise Architecture",
                skills: ["Microservices", "API Design", "System Integration", "Scalability", "Security"]
              },
              {
                category: "Data & Analytics",
                skills: ["Big Data", "Data Warehousing", "Business Intelligence", "Real-time Analytics", "ETL"]
              },
              {
                category: "Leadership & Strategy",
                skills: ["Team Leadership", "Digital Strategy", "Agile Methodologies", "Stakeholder Management", "Innovation"]
              },
              {
                category: "Programming & Development",
                skills: ["Python", "JavaScript", "Java", "React", "Node.js", "SQL"]
              }
            ].map((expertise, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg mb-4 text-primary">{expertise.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-center mb-12">
            Mission, Vision & <span className="text-gradient">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
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
      </div>
    </section>
  );
}