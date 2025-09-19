import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  MessageCircle,
  Calendar,
  Send
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "amardeep@example.com",
    action: "Send Email",
    href: "mailto:amardeep@example.com"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    action: "Call Now",
    href: "tel:+15551234567"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    action: "View Profile",
    href: "https://linkedin.com/in/amardeepbajpai"
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "@amardeepbajpai",
    action: "Follow",
    href: "https://twitter.com/amardeepbajpai"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Let's Start Your <span className="text-gradient">AI Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business with AI? Let's discuss your challenges, 
            opportunities, and how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-heading font-semibold">Send a Message</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What would you like to discuss?"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your AI challenges and goals..."
                  rows={6}
                  className="w-full"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <Calendar className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-4">
                Book a Free Consultation
              </h3>
              <p className="mb-6 opacity-90">
                Schedule a 30-minute discovery call to discuss your AI opportunities 
                and how I can help accelerate your transformation.
              </p>
              <Button variant="secondary" size="lg" className="w-full group">
                Schedule Call
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover-lift cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-heading font-semibold mb-2">{method.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Location */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Office Location</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      San Francisco Bay Area<br />
                      California, United States<br />
                      <span className="text-xs">Available for global consulting</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <h4 className="font-heading font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                I respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}