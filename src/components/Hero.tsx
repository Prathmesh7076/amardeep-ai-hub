import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/amardeep-profile.jpg";
import BookingForm from "./BookingForm";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              🚀 Senior Technology Consultant & Digital Innovation Leader
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="block">Amardeep Bajpai</span>
              <span className="block text-gradient mt-2">
                Driving Digital Transformation
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Senior Associate at Publicis Sapient with 13+ years of experience in technology consulting 
              and digital innovation. Leading transformative projects that drive business growth and 
              operational excellence across diverse industries.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-primary" />
                <span className="font-medium">13+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-secondary" />
                <span className="font-medium">100+ Projects</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="font-medium">Global Impact</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <BookingForm 
                trigger={
                  <Button size="lg" className="group">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 animate-pulse-glow"></div>
              <img
                src={heroImage}
                alt="Amardeep Bajpai - AI Expert and Thought Leader"
                className="relative rounded-2xl shadow-strong hover-lift w-full max-w-lg mx-auto"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}