import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";
import { useAuth } from "@/hooks/useAuth";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Media", href: "/media" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-heading font-bold text-gradient">
              Amardeep Bajpai
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4">
              <BookingForm 
                trigger={
                  <Button variant="default" size="sm">
                    Book Consultation
                  </Button>
                }
              />
              {user ? (
                <Button variant="outline" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              ) : (
                <Button variant="outline" size="sm" asChild>
                  <Link to="/auth">
                    <LogIn className="h-4 w-4 mr-1" />
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              <BookingForm 
                trigger={
                  <Button variant="default" size="sm" className="w-full">
                    Book Consultation
                  </Button>
                }
              />
              {user ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full" 
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              ) : (
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <LogIn className="h-4 w-4 mr-1" />
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}