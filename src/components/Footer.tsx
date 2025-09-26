import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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