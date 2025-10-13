import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Youtube,
  ArrowUp
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "AI Strategy", href: "#services" },
    { name: "Machine Learning", href: "#services" },
    { name: "Digital Transformation", href: "#services" },
    { name: "Executive Training", href: "#services" }
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Media", href: "#media" },
    { name: "FAQ", href: "#faq" }
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#projects" },
    { name: "White Papers", href: "#" },
    { name: "Speaking", href: "#media" }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "https://in.linkedin.com/in/amardeepbajpai", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/amardeepbajpai", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@amardeepbajpai", label: "YouTube" },
  { icon: Mail, href: "mailto:contact@amardeepbajpai.com", label: "Email" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscriptions")
        .insert([{ email: email.toLowerCase() }]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-gradient mb-4">
                Amardeep Bajpai
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Leading AI expert and thought leader driving transformative solutions 
                in artificial intelligence. Helping organizations navigate the future 
                through innovative AI strategies.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@amardeepbajpai.com" className="hover:text-primary transition-colors">
                  contact@amardeepbajpai.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+911204567890" className="hover:text-primary transition-colors">
                  +91-120-4567890
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Stay Updated with AI Insights
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive the latest insights, case studies, and exclusive content on AI innovation.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                disabled={isSubmitting}
                required
              />
              <Button type="submit" disabled={isSubmitting} className="sm:w-auto">
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Amardeep Bajpai. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}